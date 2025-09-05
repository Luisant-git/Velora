import { PrismaClient } from '@prisma/client';

async function fixPurchaseRateTenant() {
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
    
    // Check if purchaseRate column exists
    const result = await tenantClient.$queryRaw`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'item_masters' AND column_name = 'purchaseRate'
    ` as any[];
    
    if (result.length === 0) {
      console.log(`Adding purchaseRate column to ${tenantDbName}...`);
      await tenantClient.$executeRawUnsafe(`
        ALTER TABLE "item_masters" 
        ADD COLUMN "purchaseRate" DOUBLE PRECISION NOT NULL DEFAULT 0
      `);
      console.log(`✓ Successfully added purchaseRate column to ${tenantDbName}`);
    } else {
      console.log(`✓ PurchaseRate column already exists in ${tenantDbName}`);
    }
    
    await tenantClient.$disconnect();
    
  } catch (error) {
    console.error(`Error fixing ${tenantDbName}:`, error);
  }
}

fixPurchaseRateTenant();