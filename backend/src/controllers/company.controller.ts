import { Controller, Post, Get, Put, Delete, Body, Param, UseGuards, Request, BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../services/email.service';
import { CompanyLoginDto, CreateItemDto, UpdateItemDto, CreateCustomerDto, UpdateCustomerDto, CreateSaleDto, CreateCategoryDto, UpdateCategoryDto, CreateTaxDto, UpdateTaxDto, CreateUnitDto, UpdateUnitDto } from '../dto/company.dto';
import { LoginResponseDto, ItemResponseDto, CustomerResponseDto, SaleResponseDto } from '../dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private emailService: EmailService,
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

  @Post('forgot-password')
  @ApiOperation({ summary: 'Request password reset' })
  @ApiResponse({ status: 200, description: 'Reset email sent' })
  @ApiResponse({ status: 404, description: 'Company not found' })
  async forgotPassword(@Body() body: { email: string }) {
    const company = await this.prisma.company.findUnique({
      where: { email: body.email },
    });

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

    await this.prisma.company.update({
      where: { id: company.id },
      data: {
        resetToken,
        resetTokenExpiry,
      },
    });

    await this.emailService.sendPasswordResetEmail(
      company.email,
      resetToken,
      company.name
    );

    return { message: 'Password reset email sent' };
  }

  @Post('reset-password')
  @ApiOperation({ summary: 'Reset password with token' })
  @ApiResponse({ status: 200, description: 'Password reset successful' })
  @ApiResponse({ status: 400, description: 'Invalid or expired token' })
  async resetPassword(@Body() body: { token: string; newPassword: string }) {
    const company = await this.prisma.company.findFirst({
      where: {
        resetToken: body.token,
        resetTokenExpiry: { gt: new Date() },
      },
    });

    if (!company) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    const hashedPassword = await bcrypt.hash(body.newPassword, 10);

    await this.prisma.company.update({
      where: { id: company.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    return { message: 'Password reset successful' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get company profile' })
  async getProfile(@Request() req) {
    console.log('User from JWT:', req.user);
    return this.prisma.company.findUnique({
      where: { id: req.user.sub || req.user.id },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        logo: true,
        address: true,
        city: true,
        state: true,
        country: true,
        pinCode: true,
        gstNumber: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update company profile' })
  async updateProfile(@Request() req, @Body() body: any) {
    const updateData: any = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      logo: body.logo,
      address: body.address,
      city: body.city,
      state: body.state,
      country: body.country,
      pinCode: body.pinCode,
      gstNumber: body.gstNumber,
    };

    if (body.password) {
      updateData.password = await bcrypt.hash(body.password, 10);
    }

    return this.prisma.company.update({
      where: { id: req.user.sub || req.user.id },
      data: updateData,
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        logo: true,
        address: true,
        city: true,
        state: true,
        country: true,
        pinCode: true,
        gstNumber: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });
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
      // Create fresh client instance to bypass cache
      const databaseUrl = process.env.DATABASE_URL!.replace(
        /\/[^/]+$/, 
        `/${req.user.dbName}`
      );
      
      const tenantClient = new (require('@prisma/client').PrismaClient)({
        datasources: {
          db: {
            url: databaseUrl,
          },
        },
      });
      
      await tenantClient.$connect();
      const result = await tenantClient.itemMaster.create({ data: dto });
      await tenantClient.$disconnect();
      return result;
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
    // Create fresh client instance to bypass cache
    const databaseUrl = process.env.DATABASE_URL!.replace(
      /\/[^/]+$/, 
      `/${req.user.dbName}`
    );
    
    const tenantClient = new (require('@prisma/client').PrismaClient)({
      datasources: {
        db: {
          url: databaseUrl,
        },
      },
    });
    
    await tenantClient.$connect();
    const result = await tenantClient.itemMaster.findMany({
      include: {
        category: true,
        taxMaster: true,
        unit: true,
      },
    });
    await tenantClient.$disconnect();
    return result;
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
    return tenantClient.itemMaster.findUnique({ 
      where: { id },
      include: {
        category: true,
        taxMaster: true,
        unit: true,
      },
    });
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
        saleItems: {
          create: dto.items.map(item => ({
            itemId: item.itemId,
            quantity: item.quantity,
            discount: item.discount || 0,
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

  // Categories
  @UseGuards(JwtAuthGuard)
  @Post('categories')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new category' })
  async createCategory(@Body() dto: CreateCategoryDto, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.category.create({ data: dto });
  }

  @UseGuards(JwtAuthGuard)
  @Get('categories')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all categories' })
  async getCategories(@Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.category.findMany();
  }

  @UseGuards(JwtAuthGuard)
  @Put('categories/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update category by ID' })
  async updateCategory(@Param('id') id: string, @Body() dto: UpdateCategoryDto, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.category.update({ where: { id }, data: dto });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('categories/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete category by ID' })
  async deleteCategory(@Param('id') id: string, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.category.delete({ where: { id } });
  }

  // Taxes
  @UseGuards(JwtAuthGuard)
  @Post('taxes')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new tax' })
  async createTax(@Body() dto: CreateTaxDto, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.tax.create({ data: dto });
  }

  @UseGuards(JwtAuthGuard)
  @Get('taxes')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all taxes' })
  async getTaxes(@Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.tax.findMany();
  }

  @UseGuards(JwtAuthGuard)
  @Put('taxes/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update tax by ID' })
  async updateTax(@Param('id') id: string, @Body() dto: UpdateTaxDto, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.tax.update({ where: { id }, data: dto });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('taxes/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete tax by ID' })
  async deleteTax(@Param('id') id: string, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.tax.delete({ where: { id } });
  }

  // Units
  @UseGuards(JwtAuthGuard)
  @Post('units')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new unit' })
  async createUnit(@Body() dto: CreateUnitDto, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.unit.create({ data: dto });
  }

  @UseGuards(JwtAuthGuard)
  @Get('units')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all units' })
  async getUnits(@Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.unit.findMany();
  }

  @UseGuards(JwtAuthGuard)
  @Put('units/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update unit by ID' })
  async updateUnit(@Param('id') id: string, @Body() dto: UpdateUnitDto, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.unit.update({ where: { id }, data: dto });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('units/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete unit by ID' })
  async deleteUnit(@Param('id') id: string, @Request() req) {
    const tenantClient = this.prisma.getTenantClient(req.user.dbName);
    return tenantClient.unit.delete({ where: { id } });
  }
}