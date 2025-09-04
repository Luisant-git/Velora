import axiosServices from "../utils/axios";

const endpoints = {
  key: "items",
};

export async function getItems() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}
export async function getItem(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}
export async function postItem(data: any) {
  const response = await axiosServices.post(`${endpoints.key}`, data);
  return response
    ? { ...response.data, success: response.status == 200 }
    : null;
}
export async function deleteItem(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`);
  return response
  
}
export async function updateItem(id: any, data: any) {
  const response = await axiosServices.patch(`${endpoints.key}/${id}`, data);
  return response
    ? { ...response.data, success: response.status == 200 }
    : null;
}


export async function getDeletedItems() {
  const response = await axiosServices.get(`${endpoints.key}/deleted`);
  return response;
}

export async function restoreItems(id: any) {
  const response = await axiosServices.patch(`${endpoints.key}/restore/${id}`);
  return response ? { ...response.data, success: response.status == 200 } : null;
}