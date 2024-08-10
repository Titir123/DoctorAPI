import React from 'react'
import { Typography, TextField, Button, Container, Grid, Paper, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSignInMutation } from '@/hooks/customHooks/authQuery.hooks';
import styles from '../../../styles/login.module.css';

export default function index() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending} = useSignInMutation();

  const onSubmit = (data) => mutate(data);
  return (
    <>
    <div className={styles.login_background}>
<Container>
   <br /> <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper elevation={3} sx={{ padding: 2 ,
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
         backdropFilter: 'blur(5px)', // Optional: Adds a blur effect to the background
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'}}>
            <Typography variant="h5" gutterBottom>
              User Login
            </Typography>
            <form >
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
                {...register("password", { required: true })}
                label="password"
                fullWidth
                margin="normal"
                variant="outlined"
                type="password"
                error={errors.password}
                helperText={errors.password && "Password is required"}
              />
{isPending ?   <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                sx={{ marginTop: 2 }}
              >
                Loading...
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
                Login
              </Button>
}
            </form>
          </Paper>
        </Grid>
      </Grid>
      <br /> <br />
    </Container>
    </div>
    </>
  )
}
