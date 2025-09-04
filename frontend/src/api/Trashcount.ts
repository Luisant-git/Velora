import axiosServices from "../utils/axios";

const endpoints = {
  key: "stats",
};

export async function getDeletedCounts() {
  const response = await axiosServices.get(`${endpoints.key}/deleted-counts`);
  return response;
}

// Additional statistics-related functions can be added here as needed

/*
export async function getSystemMetrics() {
  const response = await axiosServices.get(`${endpoints.key}/metrics`);
  return response;
}
*/