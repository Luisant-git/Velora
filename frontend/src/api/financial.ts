import axiosServices from "../utils/axios";

const endpoints = {
  key: "financial-year", 
};


export async function getFinancialYears() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}


export async function getFinancialYear(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}


export async function postFinancialYear(data: any) {
  const response = await axiosServices.post(`${endpoints.key}`, data);
  return response
    ? { ...response.data, success: response.status === 200 }
    : null;
}
export async function activeFinancialYear(data: any,id:any) {
  const response = await axiosServices.post(`${endpoints.key}/${id}/activate`, data);
  return response
    ? { ...response.data, success: response.status === 200 }
    : null;
}
export async function deactiveFinancialYear(data: any,id:any) {
  const response = await axiosServices.post(`${endpoints.key}/${id}/deactivate`, data);
  return response
    ? { ...response.data, success: response.status === 200 }
    : null;
}


export async function deleteFinancialYear(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`);
  return response
    ? { ...response.data, success: response.status === 200 }
    : null;
}


export async function updateFinancialYear(id: any, data: any) {
  const response = await axiosServices.put(`${endpoints.key}/${id}`, data);
  return response
    ? { ...response.data, success: response.status === 200 }
    : null;
}