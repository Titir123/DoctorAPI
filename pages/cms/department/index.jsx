import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { pic } from '@/api/axios/axios';
import Link from 'next/link';
import { DepartmentQuery, useAOS } from '@/hooks/customHooks/cmsQuery.hooks';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function index() {

    const { data, isLoading, isError } = DepartmentQuery();
    useAOS();
  if (isLoading) return <p>Loading...</p>;
  if (isError) 
return <p>Error loading departments</p>;
 

  return (
    <>
      <Container>
      <Typography sx={{display:"flex",alignItems:"center", justifyContent:"center", variant:"h2", fontSize:"30px",fontFamily:"fantasy", marginTop:"50px", textDecorationLine:"underline", color:"skyblue", textDecorationColor:"slate"}}>
    DEPARTMENTS
  </Typography>
  <Typography style={{textAlign:"center", variant:"h2", fontSize:"40px",fontFamily:"fantasy", marginTop:"10px", color:"darkblue"}}>
Select Department-wise <br /> Doctors
  </Typography>
<Box sx={{height:"50px"}}>

</Box>
      <Grid container spacing={4}>
          {data?.map((department) => (
            <Grid item key={department._id} xs={12} sm={6} md={4}>
              <Card data-aos="flip-left">
             
                <CardMedia
                  component="img"
                  height="200"
                  image={pic(department.image)}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {department.departmentName}
                  </Typography>
                </CardContent>
                <Link style={{textDecoration:"none"}} href={`/cms/DocbyDept/${department._id}`}><Button variant='contained' color="success">Vist doctor</Button></Link>
               
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
    </>
  )
}
