import axiosServices from "../utils/axios";

const endpoints = {
  key: "concern-master",
};

export async function getConcernMasters() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}

export async function getConcernMaster(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}


export async function Concernlookup() {
  const response = await axiosServices.get(`${endpoints.key}/lookup`);
  return response;
}

export async function postConcernMaster(data: any) {
  const response = await axiosServices.post(`${endpoints.key}`, data);
  return response
    ? { ...response.data, success: response.status === 200 }
    : null;
}

export async function deleteConcernMaster(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`);
  return response
    ? { ...response.data, success: response.status === 200 }
    : null;
}

export async function updateConcernMaster(id: any, data: any) {
  const response = await axiosServices.patch(`${endpoints.key}/${id}`, data);
  return response
    ? { ...response.data, success: response.status === 200 }
    : null;
}

export async function getDeletedConcernMaster() {
  const response = await axiosServices.get(`${endpoints.key}/deleted`);
  return response;
}

export async function restoreConcernMaster(id: any) {
  const response = await axiosServices.patch(`${endpoints.key}/restore/${id}`);
  return response ? { ...response.data, success: response.status == 200 } : null;
}

