import Link from "next/link";
import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer>
            
            <Box sx={{ bgcolor: 'darkblue', color:"whitesmoke", p: 6}} component="footer">
            <Container maxWidth="lg">
             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}> 
         <Box
         component="img"
    src="/Images/4228730.png"
    alt="Medical Icon"
    sx={{ display: {  md: 'flex'}, width: "30px", height: "30px", padding: 0  }}
  />
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'left', 
          }}
        >
          Medinest
        </Typography>
      </Box>
    
       <br />
                <Grid container spacing={4} justifyContent="space-between">
        

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="skyblue" gutterBottom>
                            SITE LINKS
                        </Typography>
                        <Link href="/cms/home" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Home
                        </Link>
                        <Link href="/cms/about" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            About
                        </Link>
                        <Link href="/cms/blog" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Blogs
                        </Link>
                        <Link href="/cms/contact" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Contact
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="skyblue" gutterBottom>
                            QUICK LINKS
                        </Typography>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Contact Us
                        </Link>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Privacy Policy
                        </Link>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Terms and Conditions
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="skyblue" gutterBottom>
                            FOLLOW US
                        </Typography>
                        <IconButton href="#" color="inherit">
                            <Facebook />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <Twitter />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <Instagram />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <LinkedIn />
                        </IconButton>
                    </Grid>
                </Grid>
               
            </Container>
        </Box>
        </footer>
    );
};

export default Footer;
