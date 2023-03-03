import { Typography } from '@mui/material'
import React from 'react'
// import { useLocation } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { CurrentEmail, CurrentUsername } from '../reduxStore/myDataSlice';

function Dashboard() {

  // const location=useLocation();
  // console.log(location.state)


  const username=useSelector(CurrentUsername)
  const email=useSelector(CurrentEmail)

  return (
    <div>
        <Typography>Hello {username} </Typography>
        <Typography>Your email id is: {email} </Typography>
    </div>
  )
}

export default Dashboard