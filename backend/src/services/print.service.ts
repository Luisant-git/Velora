import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PrintService {
  constructor(private prisma: PrismaService) {}

  async printInvoice(saleId: string, dbName: string): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('PrintService: Starting print for sale ID:', saleId);
        const tenantClient = this.prisma.getTenantClient(dbName);
        
        const sale = await tenantClient.sale.findUnique({
          where: { id: saleId },
          include: {
            customer: true,
            saleItems: {
              include: {
                item: true,
              },
            },
          },
        });

        if (!sale) {
          console.error('PrintService: Sale not found');
          return resolve(false);
        }

        console.log('PrintService: Sale found, generating invoice text');
        const invoiceText = this.generateInvoiceText(sale);
        
        // Create temp file and print via PowerShell
        const tempFile = path.join(process.cwd(), 'temp_invoice.txt');
        console.log('PrintService: Creating temp file at:', tempFile);
        fs.writeFileSync(tempFile, invoiceText, { encoding: 'ascii'});
        
        // Print using PowerShell to default printer
        // const printCommand = `powershell -Command "Get-Content '${tempFile}' | Out-Printer"`;
        const printCommand = `notepad /p "${tempFile}"`;
        console.log('PrintService: Executing command:', printCommand);
        
        exec(printCommand, (error, stdout, stderr) => {
          console.log('PrintService: Command executed');
          // Clean up temp file
          setTimeout(() => {
            try { fs.unlinkSync(tempFile); } catch {}
          }, 2000);
          
          if (error) {
            console.error('PrintService: Print error:', error);
            console.error('PrintService: Error code:', error.code);
            console.error('PrintService: Error message:', error.message);
            console.error('PrintService: Stderr:', stderr);
            resolve(false);
          } else {
            console.log('PrintService: Invoice printed successfully');
            console.log('PrintService: Stdout:', stdout);
            resolve(true);
          }
        });
        
      } catch (error) {
        console.error('PrintService: Exception:', error);
        resolve(false);
      }
    });
  }

  private generateInvoiceText(sale: any): string {
    const invoiceNo = this.generateInvoiceNo(sale.id, sale.createdAt);
    const date = new Date(sale.createdAt).toLocaleDateString('en-IN');
    
const lines = [
'=====================',
'VELORA STORE',
'123 Business Street',
'City, State - 123456',
'Phone: 9876543210',
'=====================',
'INVOICE',
'=====================',
`InvoiceNo: ${invoiceNo}`,
`Date: ${date}`,
'---------------------',
'BILL TO:',
`${sale.customer.name}`,
`Phone: ${sale.customer.phone}`,
'---------------------',
'ITEMS:',
'Name Qty Amt',
'---------------------'
];
    
    // Add items
    sale.saleItems.forEach(item => {
      const name = item.item.itemName.substring(0, 12).padEnd(4);
      const qty = item.quantity.toString().padStart(3);
      const rate = item.item.sellingRate.toFixed(0).padStart(4);
      const amount = (item.quantity * item.item.sellingRate).toFixed(0).padStart(5);
      
lines.push(`${name}${qty}${amount}`.trim());
    });
    
    // Add footer
lines.push('---------------------');
lines.push(`TOTAL: Rs ${sale.totalAmount.toFixed(2)}`);
lines.push('=====================');
lines.push('Thank you for shopping');
lines.push('Visit us again soon');
lines.push('=====================');
lines.push('');
lines.push('');
lines.push('');
    
return lines.join('\n');
}

  private generateInvoiceNo(saleId: string, createdAt: string): string {
    const date = new Date(createdAt);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const id = saleId.slice(-4).toUpperCase();
    return `INV${year}${month}${id}`;
  }

  getAvailablePrinters() {
    return [];
  }
}