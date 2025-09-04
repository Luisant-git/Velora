import { Controller, Post, Get, Put, Delete, Body, Param, UseGuards, Request, BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { PrismaService } from '../prisma/prisma.service';
import { CompanyLoginDto, CreateItemDto, UpdateItemDto, CreateCustomerDto, UpdateCustomerDto, CreateSaleDto } from '../dto/company.dto';
import { LoginResponseDto, ItemResponseDto, CustomerResponseDto, SaleResponseDto } from '../dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import * as bcrypt from 'bcrypt';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Company login' })
  @ApiResponse({ status: 200, description: 'Login successful', type: LoginResponseDto })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Body() dto: CompanyLoginDto) {
    const company = await this.prisma.company.findUnique({
      where: { email: dto.email },
    });

    if (!company || !await bcrypt.compare(dto.password, company.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!company.isActive) {
      throw new UnauthorizedException('Account is inactive');
    }

    const payload = { 
      email: company.email, 
      sub: company.id, 
      type: 'company',
      dbName: company.dbName 
    };

    return {
      access_token: this.jwtService.sign(payload),
      company: {
        id: company.id,
        email: company.email,
        name: company.name,
        isActive: company.isActive,
      },
    };
  }

  // Item Master CRUD
  @UseGuards(JwtAuthGuard)
  @Post('items')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new item' })
  @ApiResponse({ status: 201, description: 'Item created successfully', type: ItemResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createItem(@Body() dto: CreateItemDto, @Request() req) {
    try {
      const tenantClient = this.prisma.getTenantClient(req.user.dbName);
      return tenantClient.itemMaster.create({ data: dto });
    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Item code already exists');
      }
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('items')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all items' })
  @ApiResponse({ status: 200, description: 'Items retrieved successfully', type: [ItemResponseDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getItems(@Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.itemMaster.findMany();
  }

  @UseGuards(JwtAuthGuard)
  @Get('items/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get item by ID' })
  @ApiParam({ name: 'id', description: 'Item ID' })
  @ApiResponse({ status: 200, description: 'Item retrieved successfully', type: ItemResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Item not found' })
  async getItem(@Param('id') id: string, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.itemMaster.findUnique({ where: { id } });
  }

  @UseGuards(JwtAuthGuard)
  @Put('items/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update item by ID' })
  @ApiParam({ name: 'id', description: 'Item ID' })
  @ApiResponse({ status: 200, description: 'Item updated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Item not found' })
  async updateItem(@Param('id') id: string, @Body() dto: UpdateItemDto, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.itemMaster.update({ where: { id }, data: dto });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('items/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete item by ID' })
  @ApiParam({ name: 'id', description: 'Item ID' })
  @ApiResponse({ status: 200, description: 'Item deleted successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Item not found' })
  async deleteItem(@Param('id') id: string, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.itemMaster.delete({ where: { id } });
  }

  // Customer Master CRUD
  @UseGuards(JwtAuthGuard)
  @Post('customers')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new customer' })
  @ApiResponse({ status: 201, description: 'Customer created successfully', type: CustomerResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createCustomer(@Body() dto: CreateCustomerDto, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.customerMaster.create({ data: dto });
  }

  @UseGuards(JwtAuthGuard)
  @Get('customers')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all customers' })
  @ApiResponse({ status: 200, description: 'Customers retrieved successfully', type: [CustomerResponseDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getCustomers(@Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.customerMaster.findMany();
  }

  @UseGuards(JwtAuthGuard)
  @Get('customers/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get customer by ID' })
  @ApiParam({ name: 'id', description: 'Customer ID' })
  @ApiResponse({ status: 200, description: 'Customer retrieved successfully', type: CustomerResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Customer not found' })
  async getCustomer(@Param('id') id: string, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.customerMaster.findUnique({ where: { id } });
  }

  @UseGuards(JwtAuthGuard)
  @Put('customers/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update customer by ID' })
  @ApiParam({ name: 'id', description: 'Customer ID' })
  @ApiResponse({ status: 200, description: 'Customer updated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Customer not found' })
  async updateCustomer(@Param('id') id: string, @Body() dto: UpdateCustomerDto, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.customerMaster.update({ where: { id }, data: dto });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('customers/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete customer by ID' })
  @ApiParam({ name: 'id', description: 'Customer ID' })
  @ApiResponse({ status: 200, description: 'Customer deleted successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Customer not found' })
  async deleteCustomer(@Param('id') id: string, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.customerMaster.delete({ where: { id } });
  }

  // Sales
  @UseGuards(JwtAuthGuard)
  @Post('sales')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new sale entry' })
  @ApiResponse({ status: 201, description: 'Sale created successfully', type: SaleResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createSale(@Body() dto: CreateSaleDto, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    
    return tenantClient.sale.create({
      data: {
        customerId: dto.customerId,
        totalAmount: dto.totalAmount,
        discount: dto.discount || 0,
        saleItems: {
          create: dto.items.map(item => ({
            itemId: item.itemId,
            quantity: item.quantity,
          })),
        },
      },
      include: {
        customer: true,
        saleItems: {
          include: {
            item: true,
          },
        },
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('sales')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get sales report' })
  @ApiResponse({ status: 200, description: 'Sales report retrieved successfully', type: [SaleResponseDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getSalesReport(@Request() req) {
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
}