import { TextField, Typography, Card } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import Basefooter from '../components/Basefooter';


function LoginPage() {
  const author_name = "Jeni";
  const current_year="2023"
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate();

  const handleClick = () => {
    if (username === "" || email === "") {
      Swal.fire("Please fill out the fields")
    }
    else if (username === "admin" || email === "123") {
      console.log(username, email)
      navigate("/dashboard", { state: { username, email } })
    }
    else {
      Swal.fire("Username or email is not correct")
    }
  }


  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "500px" }}>
        <Card style={{ width: "40vh", padding: "40px", textAlign: "center", height: "30vh" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "30px" }}>
            <Typography variant='h5' style={{ fontWeight: "bold" }}>LOGIN</Typography>
            <TextField style={{ width: "100%" }} size='small' onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username">Username</TextField>
            <TextField style={{ width: "100%" }} size='small' onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email">Email</TextField>
            <Button style={{ width: "100%" }} onClick={handleClick} variant="contained">
              Login
            </Button>
            <Basefooter authorname={author_name} currentyear={current_year}/>
          </div>
        </Card>


      </div>

    </div>

  )
}

export default LoginPage;