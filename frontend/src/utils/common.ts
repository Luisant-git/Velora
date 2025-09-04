export const printSaleEntry = (saleEntryData: any) => {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    console.error("Failed to open print window");
    return;
  }

  printWindow.document.write(`
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receipt - ${saleEntryData?.BillNo}</title>
    <style>
        body { 
            font-family: 'Courier New', monospace; 
            font-size: 12px; 
            width: 58mm; 
            padding: 5px; 
            margin: 0 auto; 
            display: flex;
            justify-content: center;
            align-items: flex-start;
            height: 100vh;
        }
        .receipt { 
            width: 100%; 
            max-width: 58mm; 
        }
        .bold { font-weight: bold; text-align: center; }
        .line { border-top: 1px dashed black; margin: 5px 0; }
        .table { width: 100%; }
        .table th, .table td { text-align: left; padding: 2px 0; }
        .table th { border-bottom: 1px dashed black; }
        .right { text-align: right; }
        .left { text-align: left; }
        .total { font-size: 14px; font-weight: bold; }
        .footer { text-align: center; font-size: 10px; margin-top: 10px; }
        .info-table { width: 100%; margin-bottom: 5px; }
        .info-table td { vertical-align: top; text-align: left !important; }
    </style>
</head>
<body>
    <div class="receipt">
        <p class="bold">Store Name</p>
        <p class="bold">Address, City, State</p>
        <p class="bold">Phone: 123-456-7890</p>
        <div class="line"></div>

        <table class="info-table">
            <tr><td class="bold left">BILL NO:</td><td class="right">${
              saleEntryData?.BillNo
            }</td></tr>
            <tr><td class="bold left">Date:</td><td class="right">${
              saleEntryData?.BillDate
            }</td></tr>
            <tr><td class="bold left">Customer ID:</td><td class="right">${
              saleEntryData?.customerId
            }</td></tr>
            <tr><td class="bold left">Remarks:</td><td class="right">${
              saleEntryData?.Remarks
            }</td></tr>
        </table>

        <div class="line"></div>
        <table class="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th class="right">Qty</th>
                    <th class="right">Price</th>
                    <th class="right">Total</th>
                </tr>
            </thead>
            <tbody>
                ${saleEntryData?.saleItems
                  ?.map(
                    (item: {
                      Item_Id: any;
                      Qty: any;
                      Rate: number;
                      NetAmount: number;
                    }) => `
                <tr>
                    <td>${item.Item_Id}</td>
                    <td class="right">${item?.Qty}</td>
                    <td class="right">${item?.Rate}</td>
                    <td class="right">${item?.NetAmount}</td>
                </tr>`
                  )
                  .join("")}
            </tbody>
        </table>

        <div class="line"></div>
        <table class="info-table">
            <tr><td class="bold">Total Qty:</td><td class="right">${
              saleEntryData?.TotalQty
            }</td></tr>
            <tr><td class="bold">Total Amount:</td><td class="right">₹${saleEntryData?.TotalAmount}</td></tr>
            <tr><td class="bold">Card Amount:</td><td class="right">₹${saleEntryData?.CardAmount}</td></tr>
            <tr><td class="bold">UPI Amount:</td><td class="right">₹${saleEntryData?.UPIAmount}</td></tr>
            <tr><td class="bold">Total Paid Amount:</td><td class="right">₹${saleEntryData?.TotalPaidAmount}</td></tr>
        </table>

        <div class="line"></div>
        <p class="right bold total">Total: ₹${saleEntryData?.TotalAmount}</p>
        <div class="line"></div>

        <p class="bold">Thank You!</p>
        <p class="footer">Visit Again</p>
    </div>

    <script>
        window.onload = function () {
            window.print();
            setTimeout(() => window.close(), 100);
        };
    </script>
</body>
</html>

    `);

  printWindow.document.close();
};

 export const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
export const getBillNo = () => {
  // const today = new Date();
  // const year = today.getFullYear();
  // const month = String(today.getMonth() + 1).padStart(2, "0");
  // const day = String(today.getDate()).padStart(2, "0");
  const uniqueId = Math.floor(10000 + Math.random() * 9000);
  return `BILL-${uniqueId}`;
};

