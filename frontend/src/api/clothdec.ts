import axiosServices from "../utils/axios";

const endpoints = {
  key: "cloth-desc",

};

export async function getClothDecs() {
  const response = await axiosServices.get(`${endpoints.key}`);
  return response;
}
export async function getClothDec(id: any) {
  const response = await axiosServices.get(`${endpoints.key}/${id}`);
  return response;
}
export async function postClothDec(data: any) {
  const response = await axiosServices.post(`${endpoints.key}`, data);
  return response?{...response.data,success:response.status==200}:null
}
export async function deleteClothDec(id: any) {
  const response = await axiosServices.delete(`${endpoints.key}/${id}`,);
  return response?{...response.data,success:response.status==200}:null
}
export async function updateClothDec(id: any, data: any) {
  const response = await axiosServices.patch(`${endpoints.key}/${id}`,data);
  return response?{...response.data,success:response.status==200}:null
}
