import { jwtDecode, JwtPayload } from "jwt-decode";
import axios from "../utils/axios";

interface DecodedToken extends JwtPayload {
  exp: number;
}

const verifyToken = (serviceToken: string | null): boolean => {
  if (!serviceToken) {
    return false;
  }
  const decoded = jwtDecode<DecodedToken>(serviceToken);
  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken: string | null) => {
  if (serviceToken) {
    localStorage.setItem("token", serviceToken);
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

const userData=(servicetoken:string|null)=>{

  if(servicetoken){
    const decoded = jwtDecode<DecodedToken>(servicetoken);
    return decoded
  }
  else{
    return null
  }
}




export default {
  verifyToken,
  setSession,
  userData
};
