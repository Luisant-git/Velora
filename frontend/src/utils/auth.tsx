// src/utils/auth.tsx
export const getToken = () => {
    return localStorage.getItem("token");
  };
  
  export const isAuthenticated = () => {
    const token = getToken();
    if (!token) return false;
  
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      return payload.exp > currentTime;
    } catch (error) {
      return false;
    }
  };

