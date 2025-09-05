import { Controller, Post, Body, UseGuards, Request, BadRequestException, UnauthorizedException, Get, Put, Delete, Param, Patch } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { PrismaService } from '../prisma/prisma.service';
import { AdminRegisterDto, AdminLoginDto, CreateCompanyDto } from '../dto/admin.dto';
import { LoginResponseDto } from '../dto/response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import * as bcrypt from 'bcrypt';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new admin' })
  @ApiResponse({ status: 201, description: 'Admin registered successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async register(@Body() dto: AdminRegisterDto) {
    try {
      const hashedPassword = await bcrypt.hash(dto.password, 10);
      
      const admin = await this.prisma.admin.create({
        data: {
          email: dto.email,
          name: dto.name,
          password: hashedPassword,
          isActive: dto.isActive ?? true,
        },
      });

      const { password, ...result } = admin;
      return result;
    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Email already exists');
      }
      throw error;
    }
  }

  @Post('login')
  @ApiOperation({ summary: 'Admin login' })
  @ApiResponse({ status: 200, description: 'Login successful', type: LoginResponseDto })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Body() dto: AdminLoginDto) {
    const admin = await this.prisma.admin.findUnique({
      where: { email: dto.email },
    });

    if (!admin || !await bcrypt.compare(dto.password, admin.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!admin.isActive) {
      throw new UnauthorizedException('Account is inactive');
    }

    const payload = { 
      email: admin.email, 
      sub: admin.id, 
      type: 'admin' 
    };

    return {
      access_token: this.jwtService.sign(payload),
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        isActive: admin.isActive,
      },
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('create-company')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new company (Admin only)' })
  @ApiResponse({ status: 201, description: 'Company created successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createCompany(@Body() dto: CreateCompanyDto, @Request() req) {
    try {
      const hashedPassword = await bcrypt.hash(dto.password, 10);
      const dbName = `company_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      const company = await this.prisma.company.create({
        data: {
          email: dto.email,
          name: dto.name,
          phone: dto.phone,
          logo: dto.logo,
          address: dto.address,
          city: dto.city,
          state: dto.state,
          country: dto.country,
          pinCode: dto.pinCode,
          gstNumber: dto.gstNumber,
          password: hashedPassword,
          isActive: dto.isActive ?? true,
          dbName,
          adminId: req.user.id,
        },
      });

      await this.prisma.createTenantDatabase(dbName);

      const { password, ...result } = company;
      return result;
    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Company email already exists');
      }
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('companies')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all companies' })
  async getCompanies(@Request() req) {
    return this.prisma.company.findMany({
      where: { adminId: req.user.id },
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
        dbName: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy : {
        createdAt: 'desc'
      }
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put('companies/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update company' })
  async updateCompany(@Param('id') id: string, @Body() dto: Partial<CreateCompanyDto>, @Request() req) {
    const updateData: any = {
      email: dto.email,
      name: dto.name,
      phone: dto.phone,
      logo: dto.logo,
      address: dto.address,
      city: dto.city,
      state: dto.state,
      country: dto.country,
      pinCode: dto.pinCode,
      gstNumber: dto.gstNumber,
      isActive: dto.isActive,
    };

    if (dto.password) {
      updateData.password = await bcrypt.hash(dto.password, 10);
    }

    const company = await this.prisma.company.update({
      where: { id, adminId: req.user.id },
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
        dbName: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return company;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('companies/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete company' })
  async deleteCompany(@Param('id') id: string, @Request() req) {
    await this.prisma.company.delete({
      where: { id, adminId: req.user.id },
    });
    return { message: 'Company deleted successfully' };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('companies/:id/toggle-status')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Toggle company active status' })
  async toggleCompanyStatus(@Param('id') id: string, @Request() req) {
    const company = await this.prisma.company.findUnique({
      where: { id, adminId: req.user.id },
    });

    if (!company) {
      throw new BadRequestException('Company not found');
    }

    return this.prisma.company.update({
      where: { id },
      data: { isActive: !company.isActive },
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
        dbName: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}