import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const BlogDetail= async (id) => {
    try {
      const response = await axiosInstance.get(`${endPoints.cms.blogDetail}/${id}`);
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };