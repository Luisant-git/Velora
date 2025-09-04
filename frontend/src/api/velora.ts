import axiosServices from '../utils/axios';

// Velora API endpoints
export const API_ENDPOINTS = {
  COMPANY_LOGIN: '/company/login',
  ITEMS: '/company/items',
  CUSTOMERS: '/company/customers',
  SALES: '/company/sales',
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
  sellingRate: number;
  mrp: number;
}

export interface CustomerData {
  name: string;
  phone: string;
  email?: string;
}

export interface SaleItemData {
  itemId: string;
  quantity: number;
}

export interface SaleData {
  customerId: string;
  items: SaleItemData[];
  discount?: number;
  totalAmount: number;
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
};