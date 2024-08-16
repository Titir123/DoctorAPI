import React, { useState } from 'react'
import { Container, Grid, Card, CardMedia, CardContent, Typography, Pagination, Box, Button } from '@mui/material';
import { getBloglist, useAOS } from '@/hooks/customHooks/cmsQuery.hooks';
import Link from 'next/link';
import { pic } from '@/api/axios/axios';
import Search from '../search/[slug]';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function index() {
    const itemsPerPage = 2;
   

    const [page, setPage] = useState(1);
 
    const [input, setInput] = useState();

    const {data, isError, isLoading , error} =getBloglist(page, itemsPerPage);
    useAOS();
  
    if (isLoading) return <p>Loading...</p>;
    if (isError) 
  return <p>Error loading products</p>;

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleChange = (e, value) => {
        setPage(value);
    };
    
   
   
    const displayBlogs =data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

 
    return (
        <>
<Container>

<Typography sx={{display:"flex",alignItems:"center", justifyContent:"center",fontFamily:"fantasy", variant:"h2", fontSize:"20px", marginTop:"50px", textDecorationLine:"underline", color:"blue", textDecorationColor:"slate"}}>
    Blog Post
  </Typography>
  <Typography style={{textAlign:"center", variant:"h3", fontSize:"50px", marginTop:"10px",fontFamily:"fantasy", color:"darkblue"}}>
OUR LATEST MEDICAL <br /> BLOG POSTS
  </Typography>
{/* <Box sx={{height:"50px"}}>
</Box> */}
<Box sx={{display:"flex", alignItems:"center", justifyContent:"right", height:"50px"}}>
<input style={{width:"200px", height:"30px"}} type="text" onChange={e => setInput(e.target.value)}/>
<Link href={`/cms/search/${input}`}><Button variant="outlined" sx={{color:"skyblue",borderColor:"blue", borderRadius:"20%", margin:"10px"}}>Search</Button></Link>
 <br /> <br />
</Box>

      <Grid container spacing={4}>
          {displayBlogs?.map(blog => (
            <Grid item key={blog._id} xs={12} sm={6} md={6}>
              <Card data-aos="zoom-in"sx={{ height:"380px"}}>
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
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </Container>
        </>
    )
}
