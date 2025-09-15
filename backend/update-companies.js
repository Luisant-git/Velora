const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateCompanies() {
  try {
    // Update all companies to have allowedTransactions
    const result = await prisma.company.updateMany({
      data: {
        allowedTransactions: ['new-sales']
      }
    });
    
    console.log(`Updated ${result.count} companies with default allowedTransactions`);
    
    // Show all companies
    const companies = await prisma.company.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        allowedTransactions: true
      }
    });
    
    console.log('All companies:');
    companies.forEach(company => {
      console.log(`${company.name} (${company.email}): ${JSON.stringify(company.allowedTransactions)}`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateCompanies();