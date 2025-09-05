import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  access_token: string;

  @ApiProperty({
    example: {
      id: 'admin_id',
      email: 'admin@example.com',
      name: 'Admin Name',
      isActive: true
    }
  })
  admin?: any;

  @ApiProperty({
    example: {
      id: 'company_id',
      email: 'company@example.com',
      name: 'Company Name',
      isActive: true
    }
  })
  company?: any;
}

export class ItemResponseDto {
  @ApiProperty({ example: 'item_id' })
  id: string;

  @ApiProperty({ example: 'ITEM001' })
  itemCode: string;

  @ApiProperty({ example: 'Sample Item' })
  itemName: string;

  @ApiProperty({ example: 18.0 })
  tax: number;

  @ApiProperty({ example: 100.0 })
  sellingRate: number;

  @ApiProperty({ example: 120.0 })
  mrp: number;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  updatedAt: string;
}

export class CustomerResponseDto {
  @ApiProperty({ example: 'customer_id' })
  id: string;

  @ApiProperty({ example: 'Customer Name' })
  name: string;

  @ApiProperty({ example: '1234567890' })
  phone: string;

  @ApiProperty({ example: 'customer@example.com', required: false })
  email?: string;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  updatedAt: string;
}

export class SaleResponseDto {
  @ApiProperty({ example: 'sale_id' })
  id: string;

  @ApiProperty({ example: 200.0 })
  totalAmount: number;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  createdAt: string;

  @ApiProperty({ type: CustomerResponseDto })
  customer: CustomerResponseDto;

  @ApiProperty({
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string', example: 'sale_item_id' },
        quantity: { type: 'number', example: 2 },
        discount: { type: 'number', example: 10.0 },
        item: { $ref: '#/components/schemas/ItemResponseDto' }
      }
    }
  })
  saleItems: any[];
}