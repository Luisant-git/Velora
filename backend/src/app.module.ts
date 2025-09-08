import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AdminController } from './controllers/admin.controller';
import { CompanyController } from './controllers/company.controller';
import { MigrationController } from './controllers/migration.controller';
import { DashboardController } from './controllers/dashboard.controller';
import { EmailService } from './services/email.service';
import { PrintService } from './services/print.service';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AppController, AdminController, CompanyController, MigrationController, DashboardController],
  providers: [AppService, PrismaService, JwtStrategy, EmailService, PrintService],
})
export class AppModule {}
