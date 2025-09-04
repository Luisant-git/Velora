import axiosServices from "../utils/axios";

const endpoints = {
  key: "trash", 
};

export async function getDeletedRecords() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}


export async function restoreRecord(id: any) {
  const response = await axiosServices.post(`${endpoints.key}/restore/${id}`);
  return response
    ? { ...response.data, success: response.status === 200 }
    : null;
}

export async function deleteRecordPermanently(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`);
  return response
    ? { ...response.data, success: response.status === 200 }
    : null;
}


export async function getDeletedRecordById(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}