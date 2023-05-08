import axios, { Axios } from "axios";   
 
export const api = axios.create({
  baseURL: "http://localhost:3001"
})
export const buscar = async(url, setData) => {
  const response = await api.get(url); 
  setData(response.data); 
} 