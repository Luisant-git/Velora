import { PrismaClient } from '@prisma/client';

async function migrateTenantDatabases() {
  const mainClient = new PrismaClient();
  
  try {
    // Get all companies (tenant databases)
    const companies = await mainClient.company.findMany({
      select: { dbName: true }
    });
    
    console.log(`Found ${companies.length} tenant databases to migrate`);
    
    for (const company of companies) {
      try {
        console.log(`Migrating database: ${company.dbName}`);
        
        // Create tenant client
        const databaseUrl = process.env.DATABASE_URL!.replace(
          /\/[^/]+$/, 
          `/${company.dbName}`
        );
        
        const tenantClient = new PrismaClient({
          datasources: {
            db: {
              url: databaseUrl,
            },
          },
        });
        
        await tenantClient.$connect();
        
        // Check if discount column exists
        const result = await tenantClient.$queryRaw`
          SELECT column_name 
          FROM information_schema.columns 
          WHERE table_name = 'sale_items' AND column_name = 'discount'
        ` as any[];
        
        if (result.length === 0) {
          // Add discount column
          await tenantClient.$executeRawUnsafe(`
            ALTER TABLE "sale_items" 
            ADD COLUMN "discount" DOUBLE PRECISION NOT NULL DEFAULT 0
          `);
          console.log(`✓ Added discount column to ${company.dbName}`);
        } else {
          console.log(`✓ Discount column already exists in ${company.dbName}`);
        }
        
        await tenantClient.$disconnect();
        
      } catch (error) {
        console.error(`Error migrating ${company.dbName}:`, error);
      }
    }
    
    console.log('Migration completed');
    
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await mainClient.$disconnect();
  }
}

migrateTenantDatabases();