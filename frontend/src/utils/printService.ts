export const printInvoice = async (saleId: string): Promise<boolean> => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3002/company/dashboard/print/${saleId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Print success:', result.message);
      return true;
    } else {
      const error = await response.json();
      console.error('Print error:', error.message);
      return false;
    }
  } catch (error) {
    console.error('Print service error:', error);
    return false;
  }
};

export const getAvailablePrinters = async () => {
  // This functionality can be added later if needed
  return null;
};

export const setPrinter = async (printerName: string) => {
  // This functionality can be added later if needed
  return false;
};