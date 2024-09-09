import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Home = () => {
    var [user, setUser]=useState([])
  useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
    .then((respond)=>{
      console.log(respond.data)
      setUser(respond.data)
    })
    })
  return (
    <div>
      <h1>Products</h1>
      <Grid container spacing={2}>
                {
                    user.map((val) => {
                        return (
                            <Grid size={4}>
                                <Card sx={{ maxWidth: 345, height:'100%' }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={val.image}
                                        title="Products"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {val.title}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {val.category}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {val.price}
                                        </Typography>

                                    </CardContent>

                                </Card>
                            </Grid>
                        )
                    })
                }


            </Grid>

    </div>
  )
}

export default Home