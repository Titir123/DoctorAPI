import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { pic } from '@/api/axios/axios';
import Link from 'next/link';
import { DepartmentQuery, useAOS } from '@/hooks/customHooks/cmsQuery.hooks';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function index() {
 

  return (
    <>
      <Container>
      <Typography sx={{display:"flex",alignItems:"center", justifyContent:"center", variant:"h2", fontSize:"30px",fontFamily:"fantasy", marginTop:"50px", textDecorationLine:"underline", color:"skyblue", textDecorationColor:"slate"}}>
    FAMOUS DEPARTMENTS
  </Typography>
  <Typography style={{textAlign:"center", variant:"h2", fontSize:"20px",fontFamily:"fantasy", marginTop:"10px", color:"darkblue"}}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </Typography>
<Box sx={{height:"50px"}}>

</Box>
<Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={4}>
      <Box className="gap" sx={{height:"50px", width:"100%"}}>
      </Box>
        {/* Mission Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image="/Images/download (1).jpeg"
              alt="Our Mission"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
        Childcare
              </Typography>
              <Link style={{textDecoration:"none"}} href={`/cms/childcare`}><Button variant='contained' color="success">Vist doctor</Button></Link>
            </CardContent>
           
          </Card>
        </Grid>

        {/* Vision Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image="/Images/images (3).jpeg"
              alt="Our Vision"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Personal Care
              </Typography>
              <Link style={{textDecoration:"none"}} href={`/cms/personalcare`}><Button variant='contained' color="success">Visit doctor</Button></Link>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
   

    </Container>
    </>
  )
}
