import { PrismaClient } from '@prisma/client';

async function fixDiscountColumn() {
  // Replace 'your_tenant_db_name' with the actual database name from the error
  const tenantDbName = process.argv[2];
  
  if (!tenantDbName) {
    console.log('Usage: npx ts-node src/scripts/fix-discount-column.ts <tenant_db_name>');
    console.log('Example: npx ts-node src/scripts/fix-discount-column.ts company_db_1');
    return;
  }
  
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
    
    // Check if discount column exists
    const result = await tenantClient.$queryRaw`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'sale_items' AND column_name = 'discount'
    ` as any[];
    
    if (result.length === 0) {
      console.log(`Adding discount column to ${tenantDbName}...`);
      await tenantClient.$executeRawUnsafe(`
        ALTER TABLE "sale_items" 
        ADD COLUMN "discount" DOUBLE PRECISION NOT NULL DEFAULT 0
      `);
      console.log(`✓ Successfully added discount column to ${tenantDbName}`);
    } else {
      console.log(`✓ Discount column already exists in ${tenantDbName}`);
    }
    
    await tenantClient.$disconnect();
    
  } catch (error) {
    console.error(`Error fixing ${tenantDbName}:`, error);
  }
}

fixDiscountColumn();