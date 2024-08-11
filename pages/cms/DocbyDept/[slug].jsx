import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { pic } from '@/api/axios/axios';
import Link from 'next/link';
import { getChildcareDoctors, getDoctorByDepartment } from '@/hooks/customHooks/cmsQuery.hooks';
import { useRouter } from 'next/router';

export default function index() {

  const router = useRouter();
  const { slug } = router.query;

    const { data, isLoading, isError } = getDoctorByDepartment(slug);
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) 
return <p>Error loading products</p>;

  return (
    <>
      <Container>
        <br /> <br />
      <Typography variant="h4" textAlign={"center"} gutterBottom>
       List of Doctors
      </Typography>
      <br />
      <Grid container spacing={4}>
          {data?.map((doctor) => (
            <Grid item key={doctor._id} xs={12} sm={6} md={4}>
              <Card>

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
                  <Typography variant="body2" color="text.secondary">
                    Availability: {doctor.aperture_time} - {doctor.departure_time}
                  </Typography>
                </CardContent>
                <Link style={{textDecoration:"none"}} href={`/cms/doctorlist/${doctor._id}`}><Button variant='contained' color="primary">Make Apointment</Button></Link>
              
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
    <br /><br />
    </>
  )
}
