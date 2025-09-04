import axiosServices from "../utils/axios";

const endpoints = {
  key: "sale-entries",
};

export async function getSaleEntries() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}
export async function getSaleEntry(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}
export async function postSaleEntry(data: any) {
  const response = await axiosServices.post(`${endpoints.key}`, data);
  return response
    ? { ...response.data , success: response.status == 201}
    : null;
}
export async function deleteSaleEntry(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`);
  return response
    ? { ...response.data, success: response.status == 200 }
    : null;
}
export async function updateSaleEntry(id: any, data: any) {
  const response = await axiosServices.patch(`${endpoints.key}/${id}`, data);
  return response
    ? { ...response.data, success: response.status == 200 }
    : null;
}


export async function getDeletedSaleEntry() {
  const response = await axiosServices.get(`${endpoints.key}/deleted`);
  return response;
}

export async function restoreSaleEntry(id: any) {
  const response = await axiosServices.patch(`${endpoints.key}/restore/${id}`);
  return response ? { ...response.data, success: response.status == 200 } : null;
}
