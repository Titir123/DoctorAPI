import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { pic } from '@/api/axios/axios';
import Link from 'next/link';
import { getFeaturedDoctors } from '@/hooks/customHooks/cmsQuery.hooks';

export default function index() {

    const {data, isError, isLoading , error} = getFeaturedDoctors();
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    //return <p>Error loading products</p>;
console.log(error);}
  return (
    <>
      <Container>
        <br /><br />
      <Typography variant="h4" gutterBottom sx={{textAlign:"center", color:"darkblue"}}>
        Featured Doctors
      </Typography>
      <br /><br />
      <Grid container spacing={4}>
          {data?.map((doctor) => (
            <Grid item key={doctor._id} xs={12} sm={6} md={4}>
              <Card>
             
                <CardMedia
                  component="img"
                  height="200"
                  image={pic(doctor.image)}
                  alt={doctor.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Availability: {doctor.aperture_time} - {doctor.departure_time}
                  </Typography>
                </CardContent>
                
                <Link style={{textDecoration:"none"}} href={`/cms/doctorlist/${doctor._id}`}><Button variant='contained' color="primary">View Details</Button></Link>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
     <br /> <br />
    </>
  )
}
