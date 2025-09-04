import axiosServices from "../utils/axios";

const endpoints = {
  key: "clothheader",
};

export async function getQuotations() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}
export async function getQuotation(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}
export async function postQuotation(data: any) {
  const response = await axiosServices.post(`${endpoints.key}/data/post`, data);
  return response?{...response.data,success:response.status==200}:null
}
export async function deleteQuotation(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`,);
  return response?{...response.data,success:response.status==200}:null
}
export async function updateQuotation(id: any, data: any) {
  const response = await axiosServices.put(`${endpoints.key}/${id}`,data);
  return response?{...response.data,success:response.status==200}:null
}
