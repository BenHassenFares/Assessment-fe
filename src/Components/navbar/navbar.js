import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'

import { Box, Button, Stack, Typography } from '@mui/material'

import logo from '../../Images/newlogo-removebg-preview.png'

import './style.scss'
const Navbar = () => {
  const navigate = useNavigate()
  const { keycloak } = useKeycloak()

  return (
    <Box className="box1" id="navbar">
      <img className="logo" alt="logo" src={logo} />
      <Stack className="stack2">
        <Typography className="custom-typography" onClick={() => navigate('/')}>
          HOME
        </Typography>
        <Typography
          className="custom-typography"
          onClick={() => navigate('/faq')}
        >
          FAQ
        </Typography>
        <Typography className="custom-typography">GET DEMO</Typography>
        {!keycloak.authenticated && (
          <Button
            variant="contained"
            className="btn"
            onClick={() => {
              keycloak.login()
            }}
          >
            SIGN IN
          </Button>
        )}
        {!!keycloak.authenticated && (
          <Button
            variant="contained"
            className="btn"
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </Button>
        )}
      </Stack>
    </Box>
  )
}
export default Navbar
