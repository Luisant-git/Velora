import axiosServices from "../utils/axios";

const endpoints = {
  key: "party",
  
};

export async function getParties() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}

export async function getParty(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}

export async function postParty(data: any) {
  const response = await axiosServices.post(`${endpoints.key}`, data);
  return response ? { ...response.data, success: response.status == 200 } : null;
}

export async function deleteParty(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`);
  return response ? { ...response.data, success: response.status == 200 } : null;
}

export async function updateParty(id: any, data: any) {
  const response = await axiosServices.patch(`${endpoints.key}/${id}`, data);
  return response ? { ...response.data, success: response.status == 200 } : null;
}


export async function getDeletedParties() {
  const response = await axiosServices.get(`${endpoints.key}/deleted`);
  return response;
}

export async function restoreParty(id: any) {
  const response = await axiosServices.patch(`${endpoints.key}/restore/${id}`);
  return response ? { ...response.data, success: response.status == 200 } : null;
}

