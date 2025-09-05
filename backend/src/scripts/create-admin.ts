import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

async function createAdmin() {
  const prisma = new PrismaClient();
  
  try {
    // Check if any admin exists
    const adminCount = await prisma.admin.count();
    console.log(`Found ${adminCount} admins in database`);
    
    if (adminCount === 0) {
      console.log('Creating default admin...');
      
      const hashedPassword = await bcrypt.hash('admin123', 10);
      
      const admin = await prisma.admin.create({
        data: {
          email: 'admin@velora.com',
          name: 'System Admin',
          password: hashedPassword,
          isActive: true,
        },
      });
      
      console.log('✓ Default admin created:');
      console.log(`Email: ${admin.email}`);
      console.log(`Password: admin123`);
      console.log(`ID: ${admin.id}`);
    } else {
      console.log('Admin(s) already exist');
      const admins = await prisma.admin.findMany({
        select: { id: true, email: true, name: true, isActive: true }
      });
      console.table(admins);
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();