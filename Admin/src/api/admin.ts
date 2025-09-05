import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const adminAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

adminAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface AdminLoginData {
  email: string;
  password: string;
}

export interface CompanyData {
  email: string;
  name: string;
  password: string;
  isActive?: boolean;
  phone?: string;
  logo?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pinCode?: string;
  gstNumber?: string;
}

export interface Company {
  id: string;
  email: string;
  name: string;
  phone?: string;
  logo?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pinCode?: string;
  gstNumber?: string;
  isActive: boolean;
  dbName: string;
  createdAt: string;
  updatedAt: string;
}

export const adminService = {
  login: async (data: AdminLoginData) => {
    const response = await adminAPI.post('/admin/login', data);
    return response.data;
  },

  getCompanies: async (): Promise<Company[]> => {
    const response = await adminAPI.get('/admin/companies');
    return response.data;
  },

  createCompany: async (data: CompanyData): Promise<Company> => {
    const response = await adminAPI.post('/admin/create-company', data);
    return response.data;
  },

  updateCompany: async (id: string, data: Partial<CompanyData>): Promise<Company> => {
    const response = await adminAPI.put(`/admin/companies/${id}`, data);
    return response.data;
  },

  deleteCompany: async (id: string): Promise<void> => {
    await adminAPI.delete(`/admin/companies/${id}`);
  },

  toggleCompanyStatus: async (id: string): Promise<Company> => {
    const response = await adminAPI.patch(`/admin/companies/${id}/toggle-status`);
    return response.data;
  },
};

export default adminService;