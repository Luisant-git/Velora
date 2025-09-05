import { PrismaClient } from '@prisma/client';

async function checkDatabases() {
  const mainClient = new PrismaClient();
  
  try {
    // Check companies in main database
    const companies = await mainClient.company.findMany();
    console.log('Companies found:', companies.length);
    
    if (companies.length > 0) {
      console.log('Company dbNames:', companies.map(c => c.dbName));
      
      // Check the first tenant database structure
      const firstCompany = companies[0];
      const databaseUrl = process.env.DATABASE_URL!.replace(
        /\/[^/]+$/, 
        `/${firstCompany.dbName}`
      );
      
      const tenantClient = new PrismaClient({
        datasources: {
          db: { url: databaseUrl },
        },
      });
      
      await tenantClient.$connect();
      
      // Check sale_items table structure
      const columns = await tenantClient.$queryRaw`
        SELECT column_name, data_type, is_nullable, column_default
        FROM information_schema.columns 
        WHERE table_name = 'sale_items'
        ORDER BY ordinal_position
      ` as any[];
      
      console.log(`\nTable structure for ${firstCompany.dbName}.sale_items:`);
      console.table(columns);
      
      await tenantClient.$disconnect();
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mainClient.$disconnect();
  }
}

checkDatabases();