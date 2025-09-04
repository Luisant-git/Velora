import axiosServices from "../utils/axios";

const endpoints = {
  key: "dia",
};

export async function getDias() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}
export async function getDia(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}
export async function postDia(data: any) {
  const response = await axiosServices.post(`${endpoints.key}`, data);
  return response
    ? { ...response.data, success: response.status == 200 }
    : null;
}
export async function deleteDia(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`);
  return response
    ? { ...response.data, success: response.status == 200 }
    : null;
}
export async function updateDia(id: any, data: any) {
  const response = await axiosServices.put(`${endpoints.key}/${id}`, data);
  return response
    ? { ...response.data, success: response.status == 200 }
    : null;
}
