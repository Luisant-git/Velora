import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AdminController } from './controllers/admin.controller';
import { CompanyController } from './controllers/company.controller';
import { MigrationController } from './controllers/migration.controller';
import { DashboardController } from './controllers/dashboard.controller';
import { ProductImageController } from './controllers/product-image.controller';
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
    MulterModule.register({
      dest: './uploads',
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'uploads'),
    //   serveRoot: '/uploads',
    // }),
  ],
  controllers: [AppController, AdminController, CompanyController, MigrationController, DashboardController, ProductImageController],
  providers: [AppService, PrismaService, JwtStrategy, EmailService, PrintService],
})
export class AppModule {}
