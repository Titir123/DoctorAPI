import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import styles from '../styles/banner.module.css';
import About from "./cms/about";
import CreateContact from "./cms/contact"
import Blog from "./cms/blog";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    <About/>

    <Blog/>

    <CreateContact/>
    </>
  );
}
