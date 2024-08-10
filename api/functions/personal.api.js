import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const Personalcare = async () => {
  try {
    const response = await axiosInstance.get(
        endPoints.cms.personal,
    );
    return response?.data?.data[0]?.doctor_id;
  } catch (error) {
    console.log("Error in fetching data",error);
  }
};