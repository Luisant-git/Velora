import axiosServices from "../utils/axios";

const endpoints = {
  key: "uom",

};

export async function getUom() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}
export async function getUoms(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}
export async function postUom(data: any) {
  const response = await axiosServices.post(`${endpoints.key}`, data);
  return response?{...response.data,success:response.status==200}:null
}
export async function deleteUom(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`,);
  return response?{...response.data,success:response.status==200}:null
}
export async function updateUom(id: any, data: any) {
  const response = await axiosServices.put(`${endpoints.key}/${id}`,data);
  return response?{...response.data,success:response.status==200}:null
}
