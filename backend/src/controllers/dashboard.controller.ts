import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('company/dashboard')
export class DashboardController {
  constructor(private prisma: PrismaService) {}

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
}