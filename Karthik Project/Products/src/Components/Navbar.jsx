import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
      <Toolbar>
                      <IconButton size="large"
                      edge="start"
                      variant="contained"
                      aria-label="menu"
                          sx={{ mr: 2 }}>
                      </IconButton>
                      <Typography align='left' variant='h6' component="div"  sx={{ flexGrow: 1 }}>Online Product Store</Typography>
                      <Link to='/home'>
                          <Button variant='contained'>Home</Button></Link>&nbsp;
                      <Link to='/add'>
                          <Button variant='contained'>Add</Button></Link>&nbsp;
                          </Toolbar>
        </AppBar>
        </Box>
    </div>
  )
}

export default Navbar