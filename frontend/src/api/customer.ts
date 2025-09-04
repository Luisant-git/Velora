import axiosServices from "../utils/axios";

const endpoints = {
  key: "customers",
};

export async function getCustomers() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}
export async function getCustomer(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}
export async function postCustomer(data: any) {
  const response = await axiosServices.post(`${endpoints.key}`, data);
  return response
    ? { ...response.data, success: response.status == 200 }
    : null;
}
export async function deleteCustomer(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`);
  return response

}
export async function updateCustomer(id: any, data: any) {
  const response = await axiosServices.put(`${endpoints.key}/${id}`,data);
  return response
    ? { ...response.data, success: response.status == 200 }
    : null;
}

export async function getDeletedCustomer() {
  const response = await axiosServices.get(`${endpoints.key}/deleted`);
  return response;
}

export async function restoreCustomer(id: any) {
  const response = await axiosServices.patch(`${endpoints.key}/restore/${id}`);
  return response ? { ...response.data, success: response.status == 200 } : null;
}