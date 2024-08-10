import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const Bloglist = async () => {
  try {
    const response = await axiosInstance.get(
        endPoints.cms.blog,
    );
    return response?.data?.data;
  } catch (error) {
    console.log("Error in fetching data",error);
  }
};