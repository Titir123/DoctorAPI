import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { pic } from '@/api/axios/axios';
import Link from 'next/link';
import { getPersonalcareDoctors } from '@/hooks/customHooks/cmsQuery.hooks';

export default function index() {

    const {data, isError, isLoading , error} = getPersonalcareDoctors();
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) 
return <p>Error loading products</p>;

  return (
    <>
      <Container>
        <br />
      <Typography variant="h4" gutterBottom>
        ChildCare Doctors
      </Typography>
       <br />
      <Grid container spacing={4}>
          {data?.map((doctor) => (
            <Grid item key={doctor._id} xs={12} sm={6} md={4}>
              <Card>
              <Link style={{textDecoration:"none"}} href={`/cms/doctorlist/${doctor._id}`}>
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
                  <Link style={{textDecoration:"none"}} href={`/cms/doctorlist/${doctor._id}`}><Button variant='contained' color="primary">View Details</Button></Link>
                </CardContent>
                </Link>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
    </>
  )
}
