import Head from "next/head";
import React, { use } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "../../../styles/Home.module.css";
import styles from '../../../styles/banner.module.css';
import Department from "../../cms/department";
import Doctorlist from "../../cms/doctorlist"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAOS } from "@/hooks/customHooks/cmsQuery.hooks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoPlayspeed:1300,
    cssEase:"Linear",
  };

  useAOS();
  return (
    <>
         <div className={styles.banner_container}>
      <Slider {...settings}>
      
          <div className={styles.slide1}>
            <div className={styles.slide_content}>
              <h2 className={styles.slide_content}>RENOWNED DOCTORS</h2>
            </div>
          </div>

          <div className={styles.slide2}>
            <div className={styles.slide_content}>
              <h2 className={styles.slide_content}>EXCELLENT FACILITIES</h2>
            </div>
          </div>

          <div className={styles.slide3}>
            <div className={styles.slide_content}>
              <h2 className={styles.slide_content}>CARE BASED ETHICS</h2>
            </div>
          </div>
       
      </Slider>
    </div>

    <Container maxWidth="lg">
    <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <Box className="gap" sx={{height:"100px", width:"100%"}}>
</Box>
        <img
          src="/Images/hero.jpg"
          alt="Team"
          style={{ width: '100%', height: '350px' }}
        />
      </Grid>
      {/* Left Side Content */}
      <Grid item xs={12} md={6}>
      <Box className="gap" sx={{height:"100px", width:"100%"}}>
      </Box>
        <Typography variant="h4" gutterBottom sx={{fontSize:"40px",fontFamily:"fantasy", color:"darkblue"}}>
          We Provide Top Medical Facilities  <br /> in the City
        </Typography>
        <Typography variant="body1" paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        </Typography>
        <Button sx={{borderColor:"blue", borderRadius:"20px", color:"blue"}} variant="outlined">
          Read More
        </Button>
      
      </Grid>
      </Grid>

      {/* Right Side Image */}
      
   
    </Container>
<br /> <br /><br />
   <Box data-aos="fade-in" data-aos-duration="3000" sx={{backgroundImage:"url('/Images/senior-male-doctor-working-hospital-260nw-1385163833.webp')",
   display:"flex",
   alignItems:"center",
   flexDirection:"column",
   justifyContent:"center",
   opcaity:"80%",
    backgroundSize:"cover",
    width:"100%",
    height:"400px"
   }}>
   <Typography variant="h4" gutterBottom sx={{fontSize:"40px",fontFamily:"fantasy", color:"darkblue"}}>
         Explore the departments 
        </Typography>
        <Container><Typography variant="h6" gutterBottom sx={{fontSize:"15px",fontFamily:"fantasy"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        </Typography></Container>
        <Link href={'/cms/department'}><Button sx={{borderColor:"blue", borderRadius:"20px", color:"blue"}} variant="outlined">
          Visit 
        </Button></Link>
   </Box>


<Box data-aos="flip-left" sx={{backgroundImage:"linear-gradient(to right, slategrey, skyblue)",
   display:"flex",
   alignItems:"center",
   flexDirection:"column",
   justifyContent:"center",
   opcaity:"80%",
    width:"100%",
    height:"400px"
   }}>
   <Typography variant="h4" gutterBottom sx={{fontSize:"40px",fontFamily:"fantasy", color:"darkblue"}}>
         Meet our team members 
        </Typography>
        <Container><Typography variant="h6" gutterBottom sx={{fontSize:"15px",fontFamily:"fantasy"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        </Typography></Container>
        <Link href={'/cms/doctorlist'}><Button sx={{borderColor:"blue", borderRadius:"20px", color:"blue"}} variant="outlined">
          Visit doctors
        </Button></Link>
   </Box>
   

   <Box data-aos="zoom-in"  sx={{backgroundImage:"url('/Images/istockphoto-1210031774-612x612.jpg')",
   display:"flex",
   alignItems:"center",
   flexDirection:"column",
   justifyContent:"center",
   opcaity:"80%",
    backgroundSize:"cover",
    width:"100%",
    height:"400px"
   }}>
   <Typography variant="h4" gutterBottom sx={{fontSize:"40px",fontFamily:"fantasy", color:"darkblue"}}>
         BLOGS
        </Typography>
        <Container><Typography variant="h6" gutterBottom sx={{fontSize:"15px",fontFamily:"fantasy"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        </Typography></Container>
        <Link href={'/cms/blog'}><Button sx={{borderColor:"blue", borderRadius:"20px", color:"blue"}} variant="outlined">
          Explore
        </Button></Link>
   </Box>

    </>
  );
}
