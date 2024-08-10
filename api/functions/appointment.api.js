import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const CreateAppointment = async (payload) => {
  try {
    const response = await axiosInstance.post(
        endPoints.cms.appointment, 
        payload
    );
    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};