import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";


export const doctorList = async () => {
    try {
      const response = await axiosInstance.get(endPoints.cms.list);
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };