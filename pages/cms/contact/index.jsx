import React from 'react'
import { TextField, Button, Container, Paper, Grid, Typography, Box, Card, CardContent, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useCreateContact } from '@/hooks/customHooks/cmsQuery.hooks';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import img from '../../../public/Images/istockphoto-1210031774-612x612.jpg';

export default function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useCreateContact();

  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <>
      <Container>
        <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center",fontFamily:"fantasy", variant: "h2", fontSize: "20px", marginTop: "50px", textDecorationLine: "underline", color: "skyblue", textDecorationColor: "slate" }}>
          ANY QUESTIONS?
        </Typography>
        <Typography style={{ textAlign: "center", variant: "h3", fontSize: "40px",fontFamily:"fantasy", marginTop: "10px", color: "darkblue" }}>
          PLEASE FEEL FREE TO <br /> CONTACT US
        </Typography>
        <Box sx={{ height: "50px" }}>
        </Box>

        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 200, margin: '20px', backgroundColor:"ButtonHighlight"}}>
                <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                  <Box display="flex" justifyContent="center" alignItems="center" mb={2}
                    sx={{
                      borderRadius: '50%',
                      width: 56,
                      height: 56,
                      backgroundColor: 'skyblue',
                      '&:hover': {
                        backgroundColor: 'grey',
                      },
                    }}>
                    <HomeIcon fontSize="large" />
                  </Box>
                  <Typography variant="body2" color="text.secondary" align="center">
                    Beleghata, Kolkata
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 200, margin: '20px', backgroundColor: "ButtonHighlight" }}>
                <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                  <Box display="flex" justifyContent="center" alignItems="center" mb={2}
                    sx={{
                      borderRadius: '50%',
                      width: 56,
                      height: 56,
                      backgroundColor: 'skyblue',
                      '&:hover': {
                        backgroundColor: 'grey',
                      },
                    }}>
                    <PhoneIcon fontSize="large" />
                  </Box>
                  <Typography variant="body2" color="text.secondary" align="center">
                    +123-456-7890
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 200, margin: '20px', backgroundColor: "ButtonHighlight" }}>
                <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                  <Box display="flex" justifyContent="center" alignItems="center" mb={2} sx={{
                    borderRadius: '50%',
                    width: 56,
                    height: 56,
                    backgroundColor: 'skyblue',
                    '&:hover': {
                      backgroundColor: 'grey',
                    },
                  }}>
                    <EmailIcon fontSize="large" />
                  </Box>
                  <Typography variant="body2" color="text.secondary" align="center">
                    medifacility@medinest.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ height: "50px" }}>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
            <div style={{ width: '100%', height: '500px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4225323141864!2d88.39597417507741!3d22.56329487949834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027680f331aad1%3A0xd8f78431a8f73b1f!2sInfectious%20Diseases%20%26%20Beleghata%20General%20Hospital!5e0!3m2!1sen!2sin!4v1723009010119!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                Create Contact
              </Typography>
              <form>
                <TextField
                  {...register("name", {
                    required: "Name is required",
                  })}
                  label="Your Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.name}
                  helperText={errors.name && errors.name.message}
                />

                <TextField
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Invalid email format",
                    },
                  })}
                  label="Your Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.email}
                  helperText={errors.email && errors.email.message}
                />

                <TextField
                  {...register("topic", {
                    required: "topic is required",
                  })}
                  label="Topic"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  type="text"
                  error={errors.topic}
                  helperText={errors.topic && errors.topic.message}
                />

                <TextField
                  {...register("phone", {
                    required: "Phone is required",
                  })}
                  label="Your Phone number"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  type="number"
                  error={errors.phone}
                  helperText={errors.phone && errors.phone.message}
                />

                <TextField
                  {...register("msg", {
                    required: "Message is required",
                  })}
                  label="Your Message"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  type="text"
                  error={errors.msg}
                  helperText={errors.msg && errors.msg.message}
                />
                {isPending ? <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  sx={{ marginTop: 2 }}
                >
                  Loading
                </Button> :
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    sx={{ marginTop: 2 }}
                  >
                    SUBMIT
                  </Button>}
              </form>
            </Paper>
          </Grid>
        </Grid>
      
        <br /> <br />
      </Container>
    </>
  )
}
