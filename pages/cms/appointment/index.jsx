import React, { useEffect } from 'react'
import { Typography, TextField, Button, Container, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DepartmentQuery, getDoctorByDepartment, useAppointment } from '@/hooks/customHooks/cmsQuery.hooks';
import { Cookies } from 'react-cookie';
import { useRouter } from 'next/router';

export default function index() {
    const cookie = new Cookies();
    const router = useRouter();
  const { dept_id, doc_id } = router.query;

    const {
        register,
        handleSubmit,
       
        formState: { errors },
    } = useForm();

    const { mutate, isPending } = useAppointment();

    const onSubmit = (data) => {
        const id = cookie.get("_id");
        const combinedData = { ...data, user_id: id, department_id:dept_id, doctor_id:doc_id };
        mutate(combinedData);
    }
    return (
        <>
            <div style={{
                width: "100%", height: "450px",
                backgroundImage:"url('/Images/240_F_645689490_Fzwptjq0YLCW8JZpC6lASo1KJcAgzZPj.jpg')",
                backgroundSize:"cover",
            
            }}>
                <Container >
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
                                    Submit
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <TextField
                                        label="Phone"
                                        fullWidth
                                        margin="normal"
                                        {...register("phone")}
                                    />
                                    <TextField
                                        label="Message"
                                        fullWidth
                                        margin="normal"
                                        {...register("message")}
                                    />

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        sx={{ marginTop: 2 }}
                                    >
                                        {isPending ? 'Loading...' : 'Submit'}
                                    </Button>
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
