// src/utils/auth.tsx
export const getToken = () => {
    return localStorage.getItem("token");
  };
  
  export const isAuthenticated = () => {
    const token = getToken();
    return !!token;
  };

