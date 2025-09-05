import { PrismaClient } from '@prisma/client';

async function fixItemMastersColumns() {
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
    
    // Check existing columns
    const columns = await tenantClient.$queryRaw`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'item_masters'
    ` as any[];
    
    const existingColumns = columns.map(c => c.column_name);
    console.log('Existing columns:', existingColumns);
    
    // Add missing columns
    const columnsToAdd = [
      { name: 'categoryId', sql: 'ADD COLUMN "categoryId" TEXT' },
      { name: 'taxId', sql: 'ADD COLUMN "taxId" TEXT' },
      { name: 'unitId', sql: 'ADD COLUMN "unitId" TEXT' }
    ];
    
    for (const column of columnsToAdd) {
      if (!existingColumns.includes(column.name)) {
        console.log(`Adding ${column.name} column...`);
        await tenantClient.$executeRawUnsafe(`
          ALTER TABLE "item_masters" ${column.sql}
        `);
        console.log(`✓ Added ${column.name} column`);
      } else {
        console.log(`✓ ${column.name} column already exists`);
      }
    }
    
    // Add foreign key constraints if tables exist
    try {
      await tenantClient.$executeRawUnsafe(`
        ALTER TABLE "item_masters" 
        ADD CONSTRAINT "item_masters_categoryId_fkey" 
        FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE
      `);
      console.log('✓ Added categoryId foreign key');
    } catch (e) {
      console.log('categoryId foreign key already exists or categories table missing');
    }
    
    try {
      await tenantClient.$executeRawUnsafe(`
        ALTER TABLE "item_masters" 
        ADD CONSTRAINT "item_masters_taxId_fkey" 
        FOREIGN KEY ("taxId") REFERENCES "taxes"("id") ON DELETE SET NULL ON UPDATE CASCADE
      `);
      console.log('✓ Added taxId foreign key');
    } catch (e) {
      console.log('taxId foreign key already exists or taxes table missing');
    }
    
    try {
      await tenantClient.$executeRawUnsafe(`
        ALTER TABLE "item_masters" 
        ADD CONSTRAINT "item_masters_unitId_fkey" 
        FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE SET NULL ON UPDATE CASCADE
      `);
      console.log('✓ Added unitId foreign key');
    } catch (e) {
      console.log('unitId foreign key already exists or units table missing');
    }
    
    await tenantClient.$disconnect();
    console.log('✓ Item masters table updated successfully');
    
  } catch (error) {
    console.error(`Error updating ${tenantDbName}:`, error);
  }
}

fixItemMastersColumns();