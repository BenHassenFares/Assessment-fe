import React from 'react'
import { Controller, useForm } from 'react-hook-form'

import {
  Box,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
  Divider,
} from '@mui/material'
import {
  LocationOn,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from '@mui/icons-material'
import MuiPhoneNumber from 'mui-phone-number'

import './style.scss'
import Layout from '../layout/layout'

const Contact = () => {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout>
      <div className="contact-container">
        <Box className="contact-container-section">
          <CardContent>
            <div>
              <Typography gutterBottom variant="h3">
                Send us a message
              </Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={1}>
                <Grid item md={12}>
                  <Controller
                    name="username"
                    control={control}
                    rules={{ required: 'Username is required' }}
                    render={({ field, fieldState }) => (
                      <TextField
                        label="Username"
                        {...field}
                        error={!!fieldState.error}
                        helperText={
                          fieldState.error && fieldState.error.message
                        }
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item md={12}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Please enter a valid email address',
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <TextField
                        type="email"
                        label="Email"
                        {...field}
                        error={!!fieldState.error}
                        helperText={
                          fieldState.error && fieldState.error.message
                        }
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: 'Phone number is required' }}
                    render={({ field, fieldState }) => (
                      <MuiPhoneNumber
                        label="Phone number"
                        {...field}
                        defaultCountry="tn"
                        error={!!fieldState.error}
                        helperText={
                          fieldState.error && fieldState.error.message
                        }
                        sx={{ width: '100%' }}
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Organisation"
                    placeholder="Organisation name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="message"
                    control={control}
                    rules={{ required: 'Message is required' }}
                    render={({ field, fieldState }) => (
                      <TextField
                        label="Message"
                        multiline
                        rows={5}
                        placeholder="Type your message here"
                        variant="outlined"
                        fullWidth
                        {...field}
                        error={!!fieldState.error}
                        helperText={
                          fieldState.error && fieldState.error.message
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Box>
        <Box className="contact-container-section">
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Contact Information
            </Typography>
            <Divider />
            <div>
              <div className="contact-container-section-icon">
                <Mail />
                <Typography variant="body1">Contact-us@Company.com</Typography>
              </div>
              <div className="contact-container-section-icon">
                <Phone />
                <Typography variant="body1">+1-617-555-0108</Typography>
              </div>
              <div className="contact-container-section-icon">
                <LocationOn />
                <Typography variant="body1">
                  177 Huntington Ave Ste 1703
                </Typography>
              </div>
            </div>
            <Divider />
            <Box className="contact-container-section-icon-other">
              <Facebook />
              <Twitter />
              <Instagram />
              <LinkedIn />
            </Box>
          </CardContent>
        </Box>
      </div>
    </Layout>
  )
}

export default Contact
