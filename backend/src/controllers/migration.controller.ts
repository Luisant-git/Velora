import { Controller, Post, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Migration')
@Controller('migration')
export class MigrationController {
  constructor(private prisma: PrismaService) {}

  @Post('add-imageurl-column/:dbName')
  @ApiOperation({ summary: 'Add imageUrl column to item_masters table' })
  async addImageUrlColumn(@Param('dbName') dbName: string) {
    try {
      const tenantClient = this.prisma.getTenantClient(dbName);
      await tenantClient.$connect();
      
      // Add imageUrl column if it doesn't exist
      await tenantClient.$executeRawUnsafe(`
        ALTER TABLE "item_masters" 
        ADD COLUMN IF NOT EXISTS "imageUrl" TEXT
      `);
      
      return { message: 'ImageUrl column added successfully' };
    } catch (error) {
      throw new Error(`Migration failed: ${error.message}`);
    }
  }

  @Post('add-master-tables/:dbName')
  @ApiOperation({ summary: 'Add master tables to tenant database' })
  async addMasterTables(@Param('dbName') dbName: string) {
    try {
      const tenantClient = this.prisma.getTenantClient(dbName);
      await tenantClient.$connect();
      
      // Create tables directly
      await tenantClient.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS "categories" (
          "id" TEXT NOT NULL,
          "name" TEXT NOT NULL,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL,
          CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
        )
      `);
      
      await tenantClient.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS "taxes" (
          "id" TEXT NOT NULL,
          "rate" DOUBLE PRECISION NOT NULL,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL,
          CONSTRAINT "taxes_pkey" PRIMARY KEY ("id")
        )
      `);
      
      await tenantClient.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS "units" (
          "id" TEXT NOT NULL,
          "symbol" TEXT NOT NULL,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL,
          CONSTRAINT "units_pkey" PRIMARY KEY ("id")
        )
      `);
      
      // Add foreign key columns to item_masters if they don't exist
      await tenantClient.$executeRawUnsafe(`
        ALTER TABLE "item_masters" 
        ADD COLUMN IF NOT EXISTS "categoryId" TEXT,
        ADD COLUMN IF NOT EXISTS "taxId" TEXT,
        ADD COLUMN IF NOT EXISTS "unitId" TEXT
      `);
      
      return { message: 'Master tables and columns created successfully' };
    } catch (error) {
      throw new Error(`Migration failed: ${error.message}`);
    }
  }
}