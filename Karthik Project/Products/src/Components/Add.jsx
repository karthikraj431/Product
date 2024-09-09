import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br></br>
        <h1>To add products please enter the details</h1>
        <br></br>
      <TextField label='Title' variant='filled'></TextField><br></br><br></br>
        <TextField label='Price' variant='filled'></TextField><br></br><br></br>
        <TextField label='Category' variant='filled'></TextField><br></br><br></br>
        <TextField label='Image' variant='filled'></TextField><br></br><br></br>
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Add
