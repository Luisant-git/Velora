import { PrismaClient } from '@prisma/client';

async function recreateTenantTables() {
  const tenantDbName = 'company_1756976026448_ud7kxomgm';
  
  try {
    const databaseUrl = process.env.DATABASE_URL!.replace(
      /\/[^/]+$/, 
      `/${tenantDbName}`
    );
    
    const tenantClient = new PrismaClient({
      datasources: {
        db: { url: databaseUrl },
      },
    });
    
    await tenantClient.$connect();
    
    // Drop and recreate item_masters table with all columns
    console.log('Dropping item_masters table...');
    await tenantClient.$executeRawUnsafe(`DROP TABLE IF EXISTS "item_masters" CASCADE`);
    
    console.log('Creating item_masters table with all columns...');
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
    
    // Add foreign key constraints
    await tenantClient.$executeRawUnsafe(`
      ALTER TABLE "item_masters" 
      ADD CONSTRAINT "item_masters_categoryId_fkey" 
      FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE
    `);
    
    await tenantClient.$executeRawUnsafe(`
      ALTER TABLE "item_masters" 
      ADD CONSTRAINT "item_masters_taxId_fkey" 
      FOREIGN KEY ("taxId") REFERENCES "taxes"("id") ON DELETE SET NULL ON UPDATE CASCADE
    `);
    
    await tenantClient.$executeRawUnsafe(`
      ALTER TABLE "item_masters" 
      ADD CONSTRAINT "item_masters_unitId_fkey" 
      FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE SET NULL ON UPDATE CASCADE
    `);
    
    await tenantClient.$disconnect();
    console.log('✓ Item masters table recreated successfully');
    
  } catch (error) {
    console.error(`Error recreating table in ${tenantDbName}:`, error);
  }
}

recreateTenantTables();