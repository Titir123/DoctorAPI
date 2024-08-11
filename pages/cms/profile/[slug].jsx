'use client';
import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Container,Grid,Typography } from '@mui/material';
import { getDashboardDetails } from '@/hooks/customHooks/cmsQuery.hooks';
import { useRouter } from 'next/router';
import { pic } from '@/api/axios/axios';
import { Cookies } from 'react-cookie';


export default function index() {
    const router = useRouter();
    const { slug } = router.query;
    const { data, isLoading, isError } = getDashboardDetails(slug);

    const [name, setName] = useState();
    const [mail, setEmail] = useState();

     const cookie = new Cookies();
   
     useEffect( () => {
        const name = cookie.get("name",{path:"/"});
        const email = cookie.get("email", {path:"/"});
        setName(name);
        setEmail(email);
     }, [name, mail])
     
 
    if(isLoading){
    <h4>Loading</h4>
    }
    
    if(isError){
        <h4>Error</h4>
    }
    return (
        <><Container>
            <br /> <br />

            <Box style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
              <img style={{width:"70px", height:"70px"}} src="/Images/download.png" alt="" />
            <Typography variant="h5" sx={{color:"navy"}}>{name}</Typography>
                <Typography variant="h6">Email: {mail}</Typography>
            </Box>


        <h3 style={{textAlign:"center", color:"skyblue", fontFamily:"fantasy"}}>Upcoming appointments</h3>
       
         <Grid container spacing={4}>
          {data?.map((doctor) => (
            <Grid item key={doctor._id} xs={12} sm={6} md={4}>
              <Card>
             
                <CardMedia
                  component="img"
                  height="300"
                  image={pic(doctor.doctor_id.image)}
                  alt={doctor.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {doctor.doctor_id.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Created at: {new Date(doctor.createdAt).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                 Message: {doctor.message}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                 Doctor's Availability: {doctor.doctor_id.aperture_time} - {doctor.doctor_id.departure_time}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
        </Container>
       <br /> <br />
</>
    )
};
