import axiosServices from "../utils/axios";

const endpoints = {
  key: "purchase-entry",
};

export async function getPurchaseEntries() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}
export async function getPurchaseEntry(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}
export async function postPurchaseEntry(data: any) {
  const response = await axiosServices.post(`${endpoints.key}`, data);
  return response
    ? { ...response.data , success: response.status == 201}
    : null;
}
export async function deletePurchaseEntry(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`);
  return response
    ? { ...response.data, success: response.status == 200 }
    : null;
}
export async function updatePurchaseEntry(id: any, data: any) {
  const response = await axiosServices.patch(`${endpoints.key}/${id}`, data);
  return response
    ? { ...response.data, success: response.status == 200 }
    : null;
}

export async function getDeletedPurchaseEntry() {
  const response = await axiosServices.get(`${endpoints.key}/deleted`);
  return response;
}

export async function restorePurchaseEntry(id: any) {
  const response = await axiosServices.patch(`${endpoints.key}/restore/${id}`);
  return response ? { ...response.data, success: response.status == 200 } : null;
}

