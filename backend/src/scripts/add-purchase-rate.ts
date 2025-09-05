import { PrismaClient } from '@prisma/client';

async function addPurchaseRateToTenants() {
  const mainClient = new PrismaClient();
  
  try {
    const companies = await mainClient.company.findMany({
      select: { dbName: true }
    });
    
    console.log(`Found ${companies.length} tenant databases to update`);
    
    for (const company of companies) {
      try {
        console.log(`Updating database: ${company.dbName}`);
        
        const databaseUrl = process.env.DATABASE_URL!.replace(
          /\/[^/]+$/, 
          `/${company.dbName}`
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
          await tenantClient.$executeRawUnsafe(`
            ALTER TABLE "item_masters" 
            ADD COLUMN "purchaseRate" DOUBLE PRECISION NOT NULL DEFAULT 0
          `);
          console.log(`✓ Added purchaseRate column to ${company.dbName}`);
        } else {
          console.log(`✓ PurchaseRate column already exists in ${company.dbName}`);
        }
        
        await tenantClient.$disconnect();
        
      } catch (error) {
        console.error(`Error updating ${company.dbName}:`, error);
      }
    }
    
    console.log('Update completed');
    
  } catch (error) {
    console.error('Update failed:', error);
  } finally {
    await mainClient.$disconnect();
  }
}

addPurchaseRateToTenants();