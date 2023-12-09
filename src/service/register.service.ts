import axios, { AxiosResponse } from "axios";
import api from "./api.service";

export const register = async (body: Object) => {
  try {
    const res: AxiosResponse = await api.post("register", body);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response;
    }
  }
};

export const login = async (body: Object) => {
  try {
    const res: AxiosResponse = await api.post("login", body);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response;
    }
  }
};
