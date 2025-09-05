import { IsEmail, IsString, IsNumber, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CompanyLoginDto {
  @ApiProperty({ example: 'company@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  password: string;
}

export class CreateItemDto {
  @ApiProperty({ example: 'ITEM001' })
  @IsString()
  itemCode: string;

  @ApiProperty({ example: 'Sample Item' })
  @IsString()
  itemName: string;

  @ApiProperty({ example: 18.0 })
  @IsNumber()
  tax: number;

  @ApiProperty({ example: 80.0 })
  @IsNumber()
  purchaseRate: number;

  @ApiProperty({ example: 100.0 })
  @IsNumber()
  sellingRate: number;

  @ApiProperty({ example: 120.0 })
  @IsNumber()
  mrp: number;

  @ApiProperty({ example: 'category_id_here', required: false })
  @IsOptional()
  @IsString()
  categoryId?: string;

  @ApiProperty({ example: 'tax_id_here', required: false })
  @IsOptional()
  @IsString()
  taxId?: string;

  @ApiProperty({ example: 'unit_id_here', required: false })
  @IsOptional()
  @IsString()
  unitId?: string;
}

export class UpdateItemDto {
  @ApiProperty({ example: 'ITEM001', required: false })
  @IsOptional()
  @IsString()
  itemCode?: string;

  @ApiProperty({ example: 'Updated Item Name', required: false })
  @IsOptional()
  @IsString()
  itemName?: string;

  @ApiProperty({ example: 18.0, required: false })
  @IsOptional()
  @IsNumber()
  tax?: number;

  @ApiProperty({ example: 85.0, required: false })
  @IsOptional()
  @IsNumber()
  purchaseRate?: number;

  @ApiProperty({ example: 110.0, required: false })
  @IsOptional()
  @IsNumber()
  sellingRate?: number;

  @ApiProperty({ example: 130.0, required: false })
  @IsOptional()
  @IsNumber()
  mrp?: number;

  @ApiProperty({ example: 'category_id_here', required: false })
  @IsOptional()
  @IsString()
  categoryId?: string;

  @ApiProperty({ example: 'tax_id_here', required: false })
  @IsOptional()
  @IsString()
  taxId?: string;

  @ApiProperty({ example: 'unit_id_here', required: false })
  @IsOptional()
  @IsString()
  unitId?: string;
}

export class CreateCustomerDto {
  @ApiProperty({ example: 'Customer Name' })
  @IsString()
  name: string;

  @ApiProperty({ example: '1234567890' })
  @IsString()
  phone: string;

  @ApiProperty({ example: 'customer@example.com', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;
}

export class UpdateCustomerDto {
  @ApiProperty({ example: 'Updated Customer Name', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: '9876543210', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'updated@example.com', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;
}

export class SaleItemDto {
  @ApiProperty({ example: 'item_id_here' })
  @IsString()
  itemId: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  quantity: number;

  @ApiProperty({ example: 10.0 })
  @IsNumber()
  discount?: number;
}

export class CreateSaleDto {
  @ApiProperty({ example: 'customer_id_here' })
  @IsString()
  customerId: string;

  @ApiProperty({ type: [SaleItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleItemDto)
  items: SaleItemDto[];

  @ApiProperty({ example: 200.0 })
  @IsNumber()
  totalAmount: number;
}

export class CreateCategoryDto {
  @ApiProperty({ example: 'Electronics' })
  @IsString()
  name: string;
}

export class UpdateCategoryDto {
  @ApiProperty({ example: 'Updated Electronics', required: false })
  @IsOptional()
  @IsString()
  name?: string;
}

export class CreateTaxDto {
  @ApiProperty({ example: 18.0 })
  @IsNumber()
  rate: number;
}

export class UpdateTaxDto {
  @ApiProperty({ example: 20.0, required: false })
  @IsOptional()
  @IsNumber()
  rate?: number;
}

export class CreateUnitDto {
  @ApiProperty({ example: 'Pcs' })
  @IsString()
  symbol: string;
}

export class UpdateUnitDto {
  @ApiProperty({ example: 'Updated Pcs', required: false })
  @IsOptional()
  @IsString()
  symbol?: string;
}