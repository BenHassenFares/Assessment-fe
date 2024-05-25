import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'

import {
  Button,
  Checkbox,
  Container,
  Grid,
  IconButton,
  Paper,
  InputAdornment,
  TextField,
  Typography,
  Box,
} from '@mui/material'
import MuiPhoneNumber from 'mui-phone-number'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { yupResolver } from '@hookform/resolvers/yup'

import { validation } from '../../validation'
import { registerRecruiter } from '../../APIs/RecruiterAPI'

import './style.scss'
const Register = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [checked, setChecked] = useState(false)
  const { control, handleSubmit, setError, reset } = useForm({
    defaultValues: {
      id: '',
      username: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(validation.register()),
  })
  const RegisterAction = async (data) => {
    const { username, phone, email, password, confirmPassword } = data
    if (password !== confirmPassword) {
      setError('confirmPassword', { message: "Password doesn't match" })
    } else {
      try {
        const response = await registerRecruiter({
          Confirm_Password: confirmPassword,
          email: email,
          username: username,
          password: password,
          phoneNumber: phone,
        })
        console.log(response)
        if (response.success) {
          navigate('/sign-in')
        } else {
          if (response.message === 'Error: Username is already taken!') {
            setError('username', { message: 'Username is already taken!' })
          }
          if (response.message === 'Error: Email is already in use!') {
            setError('email', { message: 'Email is already in use!' })
          }
          if (response.message === 'Error: Phone Number is already in use!') {
            setError('phone', { message: 'Phone number is already in use!' })
          }
        }
      } catch (error) {
        console.log(error)
        const errorMessage = error.message || 'User Registration Failed'
        alert(errorMessage)
        reset()
      }
    }
  }
  return (
    <Box className="register-container">
      <Box>
        <Typography className={' bg-text'} variant="h3">
          Register Now and
          <br /> Become a Member!
        </Typography>
        <Typography className={' sm-text'} variant="h6">
          Get the chance to create your customized test
          <br /> and invite your candidates to be evaluated
          <br /> with simple clicks.
        </Typography>
      </Box>
      <Container className="register-card">
        <Paper className="register-paper">
          <Typography
            className="register-heading"
            variant="h2"
            textAlign="center"
            color="primary"
          >
            Register Now!
          </Typography>
          <form onSubmit={handleSubmit(RegisterAction)}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Controller
                  name="username"
                  type="Text"
                  control={control}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => {
                    return (
                      <TextField
                        label={'Username'}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error && error.message}
                        sx={{ width: '100%' }}
                      />
                    )
                  }}
                />
              </Grid>
              <Grid item md={12}>
                <Controller
                  name="email"
                  control={control}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => {
                    return (
                      <TextField
                        type="email"
                        label={'Email'}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error && error.message}
                        sx={{ width: '100%' }}
                      />
                    )
                  }}
                />
              </Grid>
              <Grid item md={12}>
                <Controller
                  name="phone"
                  control={control}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => {
                    return (
                      <MuiPhoneNumber
                        label={'phone number'}
                        value={value}
                        onChange={onChange}
                        defaultCountry="tn"
                        error={!!error}
                        helperText={error && error.message}
                        sx={{ width: '100%' }}
                        variant="outlined"
                      />
                    )
                  }}
                />
              </Grid>
              <Grid item md={6}>
                <Controller
                  name="password"
                  control={control}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => {
                    return (
                      <TextField
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error && error.message}
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => {
                                  setShowPassword(!showPassword)
                                }}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )
                  }}
                />
              </Grid>
              <Grid item md={6}>
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => {
                    return (
                      <TextField
                        type={showPassword ? 'text' : 'password'}
                        label="Confirm Password"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error && error.message}
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => {
                                  setShowPassword(!showPassword)
                                }}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )
                  }}
                />
              </Grid>
              <Grid item md={12}>
                <div className="register-terms">
                  <Checkbox
                    checked={checked}
                    onChange={(event) => {
                      setChecked(event.target.checked)
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                  <Typography>
                    I agree to TestRoom Terms and Conditions
                  </Typography>
                </div>
              </Grid>
              <Grid item md={12}>
                <Button
                  disabled={checked === false}
                  variant="contained"
                  fullWidth
                  className="sign-btn"
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  )
}

export default Register
