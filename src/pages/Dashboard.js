import { Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

function Dashboard() {

  const location=useLocation();
  console.log(location.state)

  return (
    <div>
        <Typography>Hello {location.state.username} </Typography>
        <Typography>Your email id is: {location.state.email} </Typography>
    </div>
  )
}

export default Dashboard