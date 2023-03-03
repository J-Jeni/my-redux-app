import React from 'react'
import { useSelector } from 'react-redux'
import { CurrentEmail } from '../reduxStore/myDataSlice'


function Basefooter(props) {
  const email=useSelector(CurrentEmail)
  return (
    <div style={{color:"purple"}}>Designed by {props.authorname} @ {props.currentyear} Your Email ID is : {email}
   
    </div>
  )
}

export default Basefooter