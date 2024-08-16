import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Container,Grid,Typography } from '@mui/material';
import { DetailsQuery } from '@/hooks/customHooks/cmsQuery.hooks';
import { useRouter } from 'next/router';
import { pic } from '@/api/axios/axios';
import Appointment from '../../cms/appointment'

export default function index() {

  // const [openAppointment, setOpenAppointment] = useState(false);
    const router = useRouter();
    const { slug } = router.query;
    const { data, isLoading, isError } = DetailsQuery(slug);
   
    const handleOpenAppointment = () => {
      router.push({
        pathname: '/cms/appointment',
        query: {
          dept_id: data?.department_id,
          doc_id: data?.department_id?.doctor_id[0]
        }
      });
    };
   
    if(isLoading){
    <h4>Loading</h4>
    }
    
    if(isError){
        <h4>Error</h4>
    }
  return (
    <>
    <Container>
      <br />
         <h1 style={{ textAlign:"center" ,color:"blue", fontFamily:"fantasy"}}>Doctor Details</h1> <br /> <br />
     <Box style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
      <img src={pic(data?.image) }
        style={{ width: '130px', height: '130px', borderRadius:"50%" }} alt="" /> <br />
      <h2>{data?.name}</h2> <br />
      <h3>{data?.department_id.departmentName}</h3> <br />
     <h3>Availability: {data?.aperture_time} - {data?.departure_time}</h3> 
     </Box> 
<br />
     <p>{data?.description}</p>
     <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
    
      <Button 
        variant="contained" 
        sx={{color:"white",backgroundColor:"darkblue" }}
        onClick={handleOpenAppointment}
      >
        Make Appointment
      </Button>
    </div>
    </Container>
<br />
        
    </>
    
  )
}
