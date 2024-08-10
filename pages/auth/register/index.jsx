import React, { useState } from 'react'
import { TextField, Button, Container, Paper, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSignUpMutation } from '@/hooks/customHooks/authQuery.hooks';
import styles from '../../../styles/login.module.css'

export default function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useSignUpMutation();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("password", data.password);
    formData.append("forget", data.forget);
    formData.append("image", data.image[0]);
    mutate(formData);
  };
  return (
    <>
    <div className={styles.register_background}>
      <Container>
        <br /> <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
            <Paper elevation={3} sx={{ padding: 2 , 
            backgroundColor: 'rgba(255, 255, 255, 0.7)', 
         backdropFilter: 'blur(5px)', 
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
              <Typography variant="h5" gutterBottom>
                User Registration
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
                  {...register("password", { required: true })}
                  label="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  type="password"
                  error={!!errors.password}
                  helperText={errors.password && "Password is required"}
                />

                <TextField
                  {...register("forget", { required: true, maxLength: 20 })}
                  fullWidth
                  label = "Confirm password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  error={!!errors.forget}
                  helperText={errors.forget && "Password is required"}
                />
                <TextField
                  {...register("image", { required: true, maxLength: 20 })}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  type="file"
                  error={!!errors.image}
                  helperText={errors.image && "Profile pic is required"}
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
                    Register
                  </Button>}
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
