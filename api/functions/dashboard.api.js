import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const getDashboard = async (id) => {
    try {
      const response = await axiosInstance.get(`${endPoints.cms.dashboard}/${id}`);
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };