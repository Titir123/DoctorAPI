import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const Create = async (payload) => {
  try {
    const response = await axiosInstance.post(
        endPoints.cms.create, 
        payload
    );
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};