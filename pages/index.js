import { AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, Padding} from '@mui/icons-material';
import Link from "next/link";

export default function Home() {
  return (
    <>
    <AppBar position="static">
    <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
      <Box sx={{ display:"flex",alignItems:"center"}}>
      <img
         src="/Images/4228730.png"
         style={{ width:"30px", height:"30px", padding:0}}
        />

       
          <Typography variant="h6" component="div" sx={{fontFamily:"fantasy", color:"white", marginLeft:1}}>
            Medinest
          </Typography>
        </Box>

        {/* Right Button */}
        
        <Link href="/auth/register"><Button variant="outlined" sx={{backgroundColor:"darkblue", color:"white"}}>Signup</Button></Link>
      </Toolbar>
    </AppBar>
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(/Images/laboratory-563423_640.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff', // Adjust text color as needed
      }}
    >
      <Typography variant="h2" component="h1" sx={{fontFamily:"fantasy", color:"skyblue"}}>
        Welcome to Medinest
      </Typography>
      <Typography variant="h6" component="div" sx={{fontFamily:"fantasy", color:"darkblue"}}>
   Explore best medical facilities of the city
          </Typography>
      <Link href="/auth/login"><Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 3 }}
      >
       LOGIN
      </Button></Link>
    </Box>

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
  <br/>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Site Links
                        </Typography>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Home
                        </Link>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            About
                        </Link>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Blogs
                        </Link>
                        <Link href="#" variant="subtitle1" color="textSecondary" style={{textDecoration:"none",display:"block", color:"whitesmoke"}}>
                            Contact
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Quick Links
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
                        <Typography variant="h6" color="white" gutterBottom>
                            Follow Us
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
    </>
  );
}