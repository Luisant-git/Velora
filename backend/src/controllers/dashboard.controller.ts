import { Controller, Get, Post, UseGuards, Req, Param, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrintService } from '../services/print.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('company/dashboard')
export class DashboardController {
  constructor(
    private prisma: PrismaService,
    private printService: PrintService
  ) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get dashboard statistics' })
  @ApiResponse({ status: 200, description: 'Dashboard statistics retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Get('stats')
  async getDashboardStats(@Req() req: any) {
    try {
      const tenantClient = this.prisma.getTenantClient(req.user.dbName);

      const now = new Date();
      const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

      const [totalSalesAmount, currentMonthSales, previousMonthSales, totalCustomers, totalItems] = await Promise.all([
        tenantClient.sale.aggregate({ _sum: { totalAmount: true } }),
        tenantClient.sale.aggregate({
          _sum: { totalAmount: true },
          where: { createdAt: { gte: currentMonth, lt: nextMonth } }
        }),
        tenantClient.sale.aggregate({
          _sum: { totalAmount: true },
          where: { createdAt: { gte: previousMonth, lt: currentMonth } }
        }),
        tenantClient.customerMaster.count(),
        tenantClient.itemMaster.count()
      ]);

      const currentTotal = currentMonthSales._sum.totalAmount || 0;
      const previousTotal = previousMonthSales._sum.totalAmount || 0;
      const growth = previousTotal > 0 
        ? ((currentTotal - previousTotal) / previousTotal) * 100 
        : currentTotal > 0 ? 100 : 0;

      return {
        totalSales: totalSalesAmount._sum.totalAmount || 0,
        totalCustomers,
        totalItems,
        monthlyGrowth: Math.round(growth * 100) / 100,
      };
    } catch (error) {
      console.error('Dashboard stats error:', error);
      return {
        totalSales: 0,
        totalCustomers: 0,
        totalItems: 0,
        monthlyGrowth: 0,
      };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('sales')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get sales report' })
  @ApiResponse({ status: 200, description: 'Sales report retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getSalesReport(@Req() req: any) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.sale.findMany({
      include: {
        customer: true,
        saleItems: {
          include: {
            item: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('sales/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get sale by ID' })
  @ApiResponse({ status: 200, description: 'Sale retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Sale not found' })
  async getSaleById(@Param('id') id: string, @Req() req: any) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    
    const sale = await tenantClient.sale.findUnique({
      where: { id },
      include: {
        customer: true,
        saleItems: {
          include: {
            item: true,
          },
        },
      },
    });

    if (!sale) {
      throw new NotFoundException('Sale not found');
    }

    return sale;
  }

  @UseGuards(JwtAuthGuard)
  @Post('print/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Print invoice' })
  @ApiResponse({ status: 200, description: 'Invoice printed successfully' })
  async printInvoice(@Param('id') id: string, @Req() req: any) {
    try {
      console.log('Print request received for sale ID:', id);
      const success = await this.printService.printInvoice(id, req.user.dbName);
      console.log('Print service result:', success);
      if (success) {
        return { message: 'Invoice printed successfully' };
      } else {
        console.error('Print service returned false');
        throw new NotFoundException('Failed to print invoice');
      }
    } catch (error) {
      console.error('Print controller error:', error);
      throw new NotFoundException('Failed to print invoice');
    }
  }
}