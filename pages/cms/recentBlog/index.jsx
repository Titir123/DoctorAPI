import React from 'react'
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import { pic } from '@/api/axios/axios';
import { getRecentBlog } from '@/hooks/customHooks/cmsQuery.hooks';
import Link from 'next/link';

export default function index() {

  const { data: blogs, isLoading, isError } = getRecentBlog();

  if (isLoading) {
    <p>Loading...</p>
  }

  if (isError) {
    <p>Error loading blog items</p>
  }

  return (
    <>
      <Container>
        <br />
        <Typography variant="h4" gutterBottom>
          Recent Blogs
        </Typography>
        <br />
        <Grid container spacing={2}>

          {blogs?.map(blog => (
            <Grid item key={blog._id} xs={12} sm={6} md={6}>
              <Card sx={{ height: "380px" }}>
                <Link style={{ textDecoration: "none" }} href={`/cms/blog/${blog._id}`}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={pic(blog.image)}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {blog.title}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))
          }
        </Grid>
        <br />
      </Container>
    </>
  )
}
