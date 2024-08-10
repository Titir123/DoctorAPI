'use-client'
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getBlogComment, getBlogDetails, useCreatecomment } from '@/hooks/customHooks/cmsQuery.hooks';
import { useRouter } from 'next/router';
import { Container, Typography, Box, Grid, Paper, TextField, Button } from '@mui/material';
import { pic } from '@/api/axios/axios';
import { Cookies } from 'react-cookie';
import Recentblog from '../recentBlog';
import { BorderAllOutlined } from '@mui/icons-material';

export default function index() {

  const cookie = new Cookies();

  const {
    register,
    handleSubmit,
  } = useForm();

  const router = useRouter();
  const { slug } = router.query;

  const { data: blogs, isLoading, isError } = getBlogDetails(slug);

  const { data: comment, isLoading: isLoadingComment, isError: isErrorComment, refetch: refetchComments } = getBlogComment(blogs?._id);

  const { mutate, isPending } = useCreatecomment();

  useEffect(() => {
    if (blogs?._id) {
      refetchComments();
    }
  }, [blogs?._id]);

  const onSubmit = (data) => {
    const id = cookie.get("_id");
    const combinedData = { ...data, user_id: id, blog_Id: blogs?._id };
    mutate(combinedData, {
      onSuccess: () => refetchComments(),
    })
  }

  if (isLoading) {
    return <h4>Loading</h4>
  }

  if (isError) {
    return <h4>Error</h4>
  }
  return (
    <>
      <Container>
        <br /> <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
            <Box key={blogs?._id} mb={5}>
              <Typography variant="h4" sx={{ color: "blue" }} gutterBottom>
                {blogs?.title}
              </Typography>
              <Box component="img" src={pic(blogs?.image)} alt={blogs?.title} width="100%" height="auto" mb={3} />
              <Typography variant="h6" gutterBottom>
                {blogs?.description}
              </Typography>
            </Box>
            <Container>
              <Paper elevation={3} sx={{ padding: 2, backgroundColor: "whitesmoke" }}>
                <Typography variant="h6" sx={{ color: "skyblue", textDecorationLine: "underline", color: "skyblue", textDecorationColor: "slate" }} >
                  Leave your comment
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    label="Comment"
                    fullWidth
                    margin="normal"
                    {...register("comment")}
                  />

                  <Button

                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    sx={{ marginTop: 2 }}
                  >
                    {isPending ? 'Loading...' : 'Submit'}
                  </Button>
                </form>
              </Paper>

              <br /> <br />
            </Container>
            <Typography variant="h6" sx={{ color: "skyblue", textDecorationLine: "underline", color: "skyblue", textDecorationColor: "slate" }} >
              COMMENTS
            </Typography>
            {comment?.map(item =>
            (
              <div key={item?.id}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                  <img src="/Images/download.png" style={{ width: "35px", height: "35px", BorderAllOutlined, }} alt="" />
                  <h4 style={{ color: "blue" }}>{item?.user_id?.name} </h4>
                  <h5 style={{ color: "grey" }}> : {item?.comment}</h5>

                </Box>
              </div>
            ))
            }
          </Grid>

          <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
            <Recentblog />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
