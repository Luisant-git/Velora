// Velora API endpoints
export const API_ENDPOINTS = {
  // Master APIs
  ITEMS: '/api/items',
  CUSTOMERS: '/api/customers',
  
  // Transaction APIs
  SALES: '/api/sales',
  
  // Report APIs
  SALES_REPORT: '/api/reports/sales',
  
  // User APIs
  USERS: '/api/users',
  AUTH: '/api/auth',
};

// Mock API functions (replace with actual API calls)
export const veloraAPI = {
  // Items
  getItems: () => Promise.resolve([]),
  createItem: (item: any) => Promise.resolve(item),
  updateItem: (id: string, item: any) => Promise.resolve(item),
  deleteItem: (id: string) => Promise.resolve(),
  
  // Customers
  getCustomers: () => Promise.resolve([]),
  createCustomer: (customer: any) => Promise.resolve(customer),
  updateCustomer: (id: string, customer: any) => Promise.resolve(customer),
  deleteCustomer: (id: string) => Promise.resolve(),
  
  // Sales
  getSales: () => Promise.resolve([]),
  createSale: (sale: any) => Promise.resolve(sale),
  getSalesReport: (filters: any) => Promise.resolve([]),
  
  // Users
  getUsers: () => Promise.resolve([]),
  createUser: (user: any) => Promise.resolve(user),
  updateUser: (id: string, user: any) => Promise.resolve(user),
  deleteUser: (id: string) => Promise.resolve(),
};