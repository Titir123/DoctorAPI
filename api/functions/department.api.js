import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const Department = async () => {
  try {
    const response = await axiosInstance.get(
        endPoints.cms.department,
    );
    return response?.data?.data;
  } catch (error) {
    console.log("Error in fetching data",error);
  }
};