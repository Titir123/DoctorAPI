import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const Search= async (id) => {
    try {
      const response = await axiosInstance.get(`${endPoints.cms.search}/${id}`);
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };