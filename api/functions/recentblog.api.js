import { endPoints } from '../endPoints/endPoints'
import axiosInstance from '../axios/axios'

export const recentBlog = async() => {

    try{
   const response = await axiosInstance.get(endPoints.cms.recentBlog);
   return response.data?.data;
    }
    catch (error){
console.log(error);
    }
}
