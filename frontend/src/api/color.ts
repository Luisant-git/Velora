import axiosServices from "../utils/axios";

const endpoints = {
  key: "color",

};

export async function getColors() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}
export async function getColor(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}
export async function postColor(data: any) {
  const response = await axiosServices.post(`${endpoints.key}`, data);
  return response?{...response.data,success:response.status==200}:null
}
export async function deleteColor(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`,);
  return response?{...response.data,success:response.status==200}:null
}
export async function updateColor(id: any, data: any) {
  const response = await axiosServices.put(`${endpoints.key}/${id}`,data);
  return response?{...response.data,success:response.status==200}:null
}
