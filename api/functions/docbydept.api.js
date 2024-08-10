import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const docByDept = async (id) => {
    try {
      const response = await axiosInstance.get(
          `${endPoints.cms.docbydept}/${id}`, 
      );
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };