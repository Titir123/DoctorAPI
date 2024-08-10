import React, { useState } from 'react'
import { Container, Grid, Card, CardMedia, CardContent, Typography, Pagination, Box, Button } from '@mui/material';
import { getBlogSearch } from '@/hooks/customHooks/cmsQuery.hooks';
import Link from 'next/link';
import { pic } from '@/api/axios/axios';
import { useRouter } from 'next/router';

export default function index() {

  const router= useRouter();
  const {slug} = router.query;
    const {data, isError, isLoading , error} =getBlogSearch(slug);
  
    if (isLoading) return <p>Loading...</p>;
    if (isError) 
   //return <p>Error loading products</p>;
console.log(error);

    return (
        <>
<Container>

<Typography sx={{display:"flex",alignItems:"center", justifyContent:"center",fontFamily:"fantasy", variant:"h2", fontSize:"20px", marginTop:"50px", textDecorationLine:"underline", color:"skyblue", textDecorationColor:"slate"}}>
    Blog Post
  </Typography>

      <Grid container spacing={4}>
          {data?.map(blog => (
            <Grid item key={blog._id} xs={12} sm={6} md={6}>
              <Card sx={{ height:"380px"}}>
              <Link style={{textDecoration:"none"}} href={`/cms/blog/${blog._id}`}>
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
          )
        )}
      </Grid>
    </Container>
    <br /> <br />
        </>
    )
}
