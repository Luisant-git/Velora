import axiosServices from '../utils/axios';

// Velora API endpoints
export const API_ENDPOINTS = {
  COMPANY_LOGIN: '/company/login',
  FORGOT_PASSWORD: '/company/forgot-password',
  RESET_PASSWORD: '/company/reset-password',
  ITEMS: '/company/items',
  CUSTOMERS: '/company/customers',
  SALES: '/company/sales',
  CATEGORIES: '/company/categories',
  TAXES: '/company/taxes',
  UNITS: '/company/units',
  DASHBOARD_STATS: '/company/dashboard/stats',
};

// API Types
export interface LoginData {
  email: string;
  password: string;
}

export interface ItemData {
  itemCode: string;
  itemName: string;
  tax: number;
  purchaseRate: number;
  sellingRate: number;
  mrp: number;
  categoryId?: string;
  taxId?: string;
  unitId?: string;
}

export interface CustomerData {
  name: string;
  phone: string;
  email?: string;
}

export interface SaleItemData {
  itemId: string;
  quantity: number;
  discount?: number;
}

export interface SaleData {
  customerId: string;
  items: SaleItemData[];
  discount?: number;
  totalAmount: number;
}

export interface CategoryData {
  name: string;
}

export interface TaxData {
  rate: number;
}

export interface UnitData {
  symbol: string;
}

export interface DashboardStats {
  totalSales: number;
  totalCustomers: number;
  totalItems: number;
  monthlyGrowth: number;
}

// API Response Types
export interface APISaleItem {
  id: string;
  quantity: number;
  discount: number;
  saleId: string;
  itemId: string;
  item: {
    id: string;
    itemCode: string;
    itemName: string;
    tax: number;
    sellingRate: number;
    mrp: number;
    createdAt: string;
    updatedAt: string;
    categoryId: string | null;
    taxId: string | null;
    unitId: string | null;
  };
}

export interface APISale {
  id: string;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
  customerId: string;
  customer: {
    id: string;
    name: string;
    phone: string;
    email: string | null;
    createdAt: string;
    updatedAt: string;
  };
  saleItems: APISaleItem[];
}

// API functions
export const veloraAPI = {
  // Auth
  login: async (data: LoginData) => {
    const response = await axiosServices.post(API_ENDPOINTS.COMPANY_LOGIN, data);
    return response.data;
  },
  
  // Items
  getItems: async () => {
    const response = await axiosServices.get(API_ENDPOINTS.ITEMS);
    return response.data;
  },
  
  getItem: async (id: string) => {
    const response = await axiosServices.get(`${API_ENDPOINTS.ITEMS}/${id}`);
    return response.data;
  },
  
  createItem: async (item: ItemData) => {
    const response = await axiosServices.post(API_ENDPOINTS.ITEMS, item);
    return response.data;
  },
  
  updateItem: async (id: string, item: Partial<ItemData>) => {
    const response = await axiosServices.put(`${API_ENDPOINTS.ITEMS}/${id}`, item);
    return response.data;
  },
  
  deleteItem: async (id: string) => {
    const response = await axiosServices.delete(`${API_ENDPOINTS.ITEMS}/${id}`);
    return response.data;
  },
  
  // Customers
  getCustomers: async () => {
    const response = await axiosServices.get(API_ENDPOINTS.CUSTOMERS);
    return response.data;
  },
  
  getCustomer: async (id: string) => {
    const response = await axiosServices.get(`${API_ENDPOINTS.CUSTOMERS}/${id}`);
    return response.data;
  },
  
  createCustomer: async (customer: CustomerData) => {
    const response = await axiosServices.post(API_ENDPOINTS.CUSTOMERS, customer);
    return response.data;
  },
  
  updateCustomer: async (id: string, customer: Partial<CustomerData>) => {
    const response = await axiosServices.put(`${API_ENDPOINTS.CUSTOMERS}/${id}`, customer);
    return response.data;
  },
  
  deleteCustomer: async (id: string) => {
    const response = await axiosServices.delete(`${API_ENDPOINTS.CUSTOMERS}/${id}`);
    return response.data;
  },
  
  // Sales
  getSales: async () => {
    const response = await axiosServices.get(API_ENDPOINTS.SALES);
    return response.data;
  },
  
  createSale: async (sale: SaleData) => {
    const response = await axiosServices.post(API_ENDPOINTS.SALES, sale);
    return response.data;
  },

  // Categories
  getCategories: async () => {
    const response = await axiosServices.get(API_ENDPOINTS.CATEGORIES);
    return response.data;
  },
  
  createCategory: async (category: CategoryData) => {
    const response = await axiosServices.post(API_ENDPOINTS.CATEGORIES, category);
    return response.data;
  },
  
  updateCategory: async (id: string, category: Partial<CategoryData>) => {
    const response = await axiosServices.put(`${API_ENDPOINTS.CATEGORIES}/${id}`, category);
    return response.data;
  },
  
  deleteCategory: async (id: string) => {
    const response = await axiosServices.delete(`${API_ENDPOINTS.CATEGORIES}/${id}`);
    return response.data;
  },

  // Taxes
  getTaxes: async () => {
    const response = await axiosServices.get(API_ENDPOINTS.TAXES);
    return response.data;
  },
  
  createTax: async (tax: TaxData) => {
    const response = await axiosServices.post(API_ENDPOINTS.TAXES, tax);
    return response.data;
  },
  
  updateTax: async (id: string, tax: Partial<TaxData>) => {
    const response = await axiosServices.put(`${API_ENDPOINTS.TAXES}/${id}`, tax);
    return response.data;
  },
  
  deleteTax: async (id: string) => {
    const response = await axiosServices.delete(`${API_ENDPOINTS.TAXES}/${id}`);
    return response.data;
  },

  // Units
  getUnits: async () => {
    const response = await axiosServices.get(API_ENDPOINTS.UNITS);
    return response.data;
  },
  
  createUnit: async (unit: UnitData) => {
    const response = await axiosServices.post(API_ENDPOINTS.UNITS, unit);
    return response.data;
  },
  
  updateUnit: async (id: string, unit: Partial<UnitData>) => {
    const response = await axiosServices.put(`${API_ENDPOINTS.UNITS}/${id}`, unit);
    return response.data;
  },
  
  deleteUnit: async (id: string) => {
    const response = await axiosServices.delete(`${API_ENDPOINTS.UNITS}/${id}`);
    return response.data;
  },

  // Dashboard
  getDashboardStats: async (): Promise<DashboardStats> => {
    const response = await axiosServices.get(API_ENDPOINTS.DASHBOARD_STATS);
    return response.data;
  },

  // Password Reset
  forgotPassword: async (email: string) => {
    const response = await axiosServices.post(API_ENDPOINTS.FORGOT_PASSWORD, { email });
    return response.data;
  },

  resetPassword: async (token: string, newPassword: string) => {
    const response = await axiosServices.post(API_ENDPOINTS.RESET_PASSWORD, { token, newPassword });
    return response.data;
  },
};