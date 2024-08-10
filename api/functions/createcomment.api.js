import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const Createcomment = async (payload) => {
  try {
    const response = await axiosInstance.post(
        endPoints.cms.createcomment, 
        payload
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};