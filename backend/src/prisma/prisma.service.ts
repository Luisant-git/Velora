import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private tenantClients: Map<string, PrismaClient> = new Map();

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
    for (const client of this.tenantClients.values()) {
      await client.$disconnect();
    }
  }

  getTenantClient(dbName: string): PrismaClient {
    if (!this.tenantClients.has(dbName)) {
      const databaseUrl = process.env.DATABASE_URL!.replace(
        /\/[^/]+$/, 
        `/${dbName}`
      );
      
      const client = new PrismaClient({
        datasources: {
          db: {
            url: databaseUrl,
          },
        },
      });
      
      this.tenantClients.set(dbName, client);
    }
    
    return this.tenantClients.get(dbName)!;
  }

  async clearTenantClient(dbName: string): Promise<void> {
    const client = this.tenantClients.get(dbName);
    if (client) {
      await client.$disconnect();
      this.tenantClients.delete(dbName);
    }
  }

  async createTenantDatabase(dbName: string): Promise<void> {
    await this.$executeRawUnsafe(`CREATE DATABASE "${dbName}"`);
    
    const tenantClient = this.getTenantClient(dbName);
    await tenantClient.$connect();
    
    // Create tables one by one
    await tenantClient.$executeRawUnsafe(`
      CREATE TABLE "item_masters" (
        "id" TEXT NOT NULL,
        "itemCode" TEXT NOT NULL,
        "itemName" TEXT NOT NULL,
        "tax" DOUBLE PRECISION NOT NULL,
        "purchaseRate" DOUBLE PRECISION NOT NULL,
        "sellingRate" DOUBLE PRECISION NOT NULL,
        "mrp" DOUBLE PRECISION NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        "categoryId" TEXT,
        "taxId" TEXT,
        "unitId" TEXT,
        CONSTRAINT "item_masters_pkey" PRIMARY KEY ("id")
      )
    `);
    
    await tenantClient.$executeRawUnsafe(`CREATE UNIQUE INDEX "item_masters_itemCode_key" ON "item_masters"("itemCode")`);
    
    await tenantClient.$executeRawUnsafe(`
      CREATE TABLE "customer_masters" (
        "id" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "phone" TEXT NOT NULL,
        "email" TEXT,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        CONSTRAINT "customer_masters_pkey" PRIMARY KEY ("id")
      )
    `);
    
    await tenantClient.$executeRawUnsafe(`
      CREATE TABLE "sales" (
        "id" TEXT NOT NULL,
        "totalAmount" DOUBLE PRECISION NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        "customerId" TEXT NOT NULL,
        CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
      )
    `);
    
    await tenantClient.$executeRawUnsafe(`
      CREATE TABLE "sale_items" (
        "id" TEXT NOT NULL,
        "quantity" INTEGER NOT NULL,
        "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
        "saleId" TEXT NOT NULL,
        "itemId" TEXT NOT NULL,
        CONSTRAINT "sale_items_pkey" PRIMARY KEY ("id")
      )
    `);
    
    await tenantClient.$executeRawUnsafe(`
      CREATE TABLE "categories" (
        "id" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
      )
    `);
    
    await tenantClient.$executeRawUnsafe(`
      CREATE TABLE "taxes" (
        "id" TEXT NOT NULL,
        "rate" DOUBLE PRECISION NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        CONSTRAINT "taxes_pkey" PRIMARY KEY ("id")
      )
    `);
    
    await tenantClient.$executeRawUnsafe(`
      CREATE TABLE "units" (
        "id" TEXT NOT NULL,
        "symbol" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        CONSTRAINT "units_pkey" PRIMARY KEY ("id")
      )
    `);
    
    await tenantClient.$executeRawUnsafe(`ALTER TABLE "sales" ADD CONSTRAINT "sales_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer_masters"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    await tenantClient.$executeRawUnsafe(`ALTER TABLE "sale_items" ADD CONSTRAINT "sale_items_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    await tenantClient.$executeRawUnsafe(`ALTER TABLE "sale_items" ADD CONSTRAINT "sale_items_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item_masters"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    await tenantClient.$executeRawUnsafe(`ALTER TABLE "item_masters" ADD CONSTRAINT "item_masters_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    await tenantClient.$executeRawUnsafe(`ALTER TABLE "item_masters" ADD CONSTRAINT "item_masters_taxId_fkey" FOREIGN KEY ("taxId") REFERENCES "taxes"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    await tenantClient.$executeRawUnsafe(`ALTER TABLE "item_masters" ADD CONSTRAINT "item_masters_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
  }
}
