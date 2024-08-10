import axiosInstance from "../axios/axios"
import { endPoints } from "../endPoints/endPoints"

export const BlogComment = async(id) => {
   try
   { const response = await axiosInstance.get(
        `${endPoints.cms.comment}/${id}`)
        return response.data?.data;
   }
    catch(err){
        console.log(err);
    }
}