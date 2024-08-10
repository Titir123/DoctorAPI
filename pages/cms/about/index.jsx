import { Box, Button, Container, Grid, styled, Typography } from '@mui/material'
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
        <Typography variant="h3" sx={{fontFamily:"fantasy"}} gutterBottom>
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
        </BannerButtons>
      </Grid>
   
    </Grid>
    </Container>

    <Box className="gap" sx={{height:"50px", width:"100%"}}>
    </Box>

   

   

    <Department/>

    <Doctorlist/>

    </>
  )
}
