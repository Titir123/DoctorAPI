import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetDoctorsQueries } from '@/hooks/customHooks/cmsQuery.hooks';
import {pic} from '@/api/axios/axios';
import Link from 'next/link';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function index() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoPlayspeed:1000,
    cssEase:"Linear",
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
  };
    const {data, isError, isLoading} = useGetDoctorsQueries();
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;


  return (
    <>

<Typography sx={{display:"flex",alignItems:"center", justifyContent:"center", variant:"h2", fontSize:"20px",fontFamily:"fantasy", marginTop:"50px", textDecorationLine:"underline", color:"skyblue", textDecorationColor:"slate"}}>
  Doctors
  </Typography>
  <Typography style={{textAlign:"center", variant:"h3", fontSize:"50px", marginTop:"10px",fontFamily:"fantasy", color:"darkblue"}}>
Qualified Healthcare <br/> Professionals
  </Typography>
<Box sx={{height:"50px"}}>

</Box>
<Container maxWidth="xl">

      <Slider {...settings}>
     
          {data?.map((doctor) => (
            <div key={doctor._id}>
              <Card sx={{ margin : "10px", height:"500px" }}>
          
             
                <CardMedia
                  component="img"
                  height="300"
                  
                  image={pic(doctor.image)}
                  alt={doctor.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div" color={"blue"}>
                    {doctor.name}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {doctor.department_details[0].departmentName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Availability: {doctor.aperture_time} - {doctor.departure_time}
                  </Typography>
                </CardContent>
                
                
                <Link style={{textDecoration:"none"}} href={`/cms/doctorlist/${doctor._id}`}><Button variant='contained' color="primary">Make Apointment</Button></Link>
              </Card>
          </div>
               ))
              }
              
      </Slider>
    </Container>  
    <br /> <br />
    </>
  )
}
