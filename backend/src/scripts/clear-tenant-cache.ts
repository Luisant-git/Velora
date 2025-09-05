import { PrismaClient } from '@prisma/client';

async function clearTenantCache() {
  const tenantDbName = 'company_1756976026448_ud7kxomgm';
  
  try {
    // Force disconnect any existing connections
    const databaseUrl = process.env.DATABASE_URL!.replace(
      /\/[^/]+$/, 
      `/${tenantDbName}`
    );
    
    // Create a fresh client to test the connection
    const testClient = new PrismaClient({
      datasources: {
        db: { url: databaseUrl },
      },
    });
    
    await testClient.$connect();
    
    // Test if the columns exist
    const columns = await testClient.$queryRaw`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'item_masters'
      ORDER BY column_name
    ` as any[];
    
    console.log('Available columns in item_masters:');
    console.log(columns.map(c => c.column_name));
    
    // Try to create a simple item to test
    try {
      const testItem = await testClient.itemMaster.create({
        data: {
          itemCode: 'TEST001',
          itemName: 'Test Item',
          tax: 18,
          purchaseRate: 80,
          sellingRate: 100,
          mrp: 120,
        }
      });
      console.log('✓ Test item created successfully:', testItem.id);
      
      // Clean up test item
      await testClient.itemMaster.delete({
        where: { id: testItem.id }
      });
      console.log('✓ Test item deleted');
      
    } catch (error) {
      console.error('Error creating test item:', error);
    }
    
    await testClient.$disconnect();
    
  } catch (error) {
    console.error('Error:', error);
  }
}

clearTenantCache();