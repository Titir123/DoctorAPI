import React, { useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Container,Grid,Typography } from '@mui/material';
import { DetailsQuery } from '@/hooks/customHooks/cmsQuery.hooks';
import { useRouter } from 'next/router';
import { pic } from '@/api/axios/axios';
import Appointment from '../../cms/appointment'

export default function index() {
    const router = useRouter();
    const { slug } = router.query;
    const { data, isLoading, isError } = DetailsQuery(slug);
   
    if(isLoading){
    <h4>Loading</h4>
    }
    
    if(isError){
        <h4>Error</h4>
    }
  return (
    <>
    <Container>
         <h1 style={{ textAlign:"center" ,color:"blue", fontFamily:"fantasy"}}>Doctor Details</h1> <br /> <br />
     <Box style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
      <img src={pic(data?.image) }
        style={{ width: '100px', height: '70px' }} alt="" />
      <h2>{data?.name}</h2>
      <h3>{data?.department_id.departmentName}</h3>
     <h3>Availability: {data?.aperture_time} - {data?.departure_time}</h3> 
     </Box> 

     <p>{data?.description}</p>

     <Appointment dept_id = {data?.department_id} doc_id = {data?.department_id.doctor_id[0]}/>
    </Container>

        
    </>
    
  )
}
