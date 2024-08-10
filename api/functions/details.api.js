import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const getDetails = async (id) => {
    try {
      const response = await axiosInstance.get(`${endPoints.cms.details}/${id}`);
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };