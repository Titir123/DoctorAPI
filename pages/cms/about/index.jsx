import { Box, Button, Card, CardContent, CardMedia, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import Doctorlist from "../../cms/doctorlist";
import Department from "../../cms/department";
import Link from 'next/link';

export default function index() {
    const BannerButtons = styled(Box)(({ theme }) => ({
        marginTop: theme.spacing(2),
        display: 'flex',
        gap: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
        },
      }));
      
     const PillButton = styled(Button)(({ theme }) => ({
        borderRadius: '50px',
        padding: theme.spacing(1, 3),
        fontSize: '1rem',
        [theme.breakpoints.down('sm')]: {
          fontSize: '0.8rem',
        },
      }));
      
  return (
    <>
      <Container maxWidth="xl">

<Grid container spacing={4}>


<Grid item xs={12} md={6}>
      <Box className="gap" sx={{height:"50px", width:"100%"}}>
</Box>
        <img
          src="/Images/about.jpg"
          alt="Team"
          style={{ width: '100%', height: '450px' }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
      <Box className="gap" sx={{height:"50px", width:"100%"}}>
</Box>

      <Typography sx={{color:"slateblue", textDecoration:"underlined", fontFamily:"fantasy"}} variant="h4">
          ABOUT US
         </Typography>
        <br/>
        <Typography variant="h3" sx={{fontFamily:"fantasy", color:"darkblue"}} gutterBottom>
         BEST MEDICAL CARE FOR YOURSELF AND YOUR FAMILY
        </Typography>
        <Typography variant="body1" paragraph>
        Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna
        </Typography>
        <BannerButtons>
        <Link href ='/cms/featured'>
        <PillButton sx={{borderColor:"skyblue", borderRadius:"20px", color:"skyblue"}} variant="outlined">
         Featured Doctors
        </PillButton></Link>
        <Link href ='/cms/famous'>
        <PillButton sx={{borderColor:"skyblue", borderRadius:"20px", color:"skyblue"}} variant="outlined">
         Famous Departments
        </PillButton></Link>
        </BannerButtons>
      </Grid>
   
    </Grid>
    </Container>

    <Box className="gap" sx={{height:"50px", width:"100%"}}>
    </Box>

   
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom fontFamily="fantasy" color="darkblue">
        Our Mission & Vision
      </Typography>
      <Grid container spacing={4}>
      <Box className="gap" sx={{height:"50px", width:"100%"}}>
      </Box>
        {/* Mission Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image="/Images/images (2).jpeg"
              alt="Our Mission"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                Our mission is to provide top-quality medical services, ensuring that every patient receives personalized and comprehensive care through innovative technology and compassionate professionals.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Vision Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image="/Images/download.jpeg"
              alt="Our Vision"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1">
                Our vision is to revolutionize healthcare by leveraging cutting-edge technology, making it accessible to everyone, and setting new standards in patient care and wellness management.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
   

    {/* <Department/>

    <Doctorlist/> */}

    </>
  )
}
