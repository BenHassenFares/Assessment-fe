import React, { useRef, useState, useEffect } from 'react'
import { useKeycloak } from '@react-keycloak/web'
import {
  Avatar,
  Card,
  CardActions,
  Grid,
  Icon,
  CardContent,
  TextField,
  Button,
  Typography,
  Divider,
  Stack,
  Box,
} from '@mui/material'
import Layout from '../layout/layout'

const UserProfile = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyAddress, setCompanyAddress] = useState('')
  const [companyWebsite, setCompanyWebsite] = useState('')
  const [socialMediaLink, setSocialMediaLink] = useState('')
  const { keycloak } = useKeycloak()
  const [userState, setUserState] = useState({
    givenName: '',
    email: '',
    userName: '',
    lastName: '',
  })
  useEffect(() => {
    const loadUserInfo = async () => {
      const response = await keycloak.loadUserInfo()
      setUserState({
        ...userState,
        givenName: response.given_name,
        email: response.email,
        userName: response.preferred_username,
        lastName: response.family_name,
      })
    }

    loadUserInfo()
  }, [])
  const handleChange = (event) => {
    const { name, value } = event.target

    switch (name) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'username':
        setUsername(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'phoneNumber':
        setPhoneNumber(value)
        break
      case 'companyName':
        setCompanyName(value)
        break
      case 'companyAddress':
        setCompanyAddress(value)
        break
      case 'companyWebsite':
        setCompanyWebsite(value)
        break
      case 'socialMediaLink':
        setSocialMediaLink(value)
        break
      default:
        break
    }
  }

  const handleSubmit = () => {
    // Submit the changes to the backend here
  }

  return (
    <Layout>
      <Card sx={{ maxWidth: 900, backgroundColor: '#f0f5ff' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box>
                <Avatar src="" alt="" sx={{ width: 200, height: 200 }} />
                <Typography variant="h5" component="h2">
                  {userState.userName}
                </Typography>
                <Typography variant="body1" component="p">
                  {userState.email}
                </Typography>
              </Box>
            </Grid>
            {/* <Divider sx={{ margin: '20px 0' }} /> */}
            <Grid item xs={8}>
              <Stack spacing={2}>
                <TextField
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  value={userState.givenName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Icon>person</Icon>,
                  }}
                />
                <TextField
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={userState.lastName}
                  onChange={handleChange}
                />
                <TextField
                  id="username"
                  label="Username"
                  name="username"
                  value={userState.userName}
                  onChange={handleChange}
                />
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  value={userState.email}
                  onChange={handleChange}
                />
                <TextField
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChange}
                />
                <TextField
                  id="companyName"
                  label="Company Name"
                  name="companyName"
                  value={companyName}
                  onChange={handleChange}
                />
                <TextField
                  id="companyAddress"
                  label="Company Address"
                  name="companyAddress"
                  value={companyAddress}
                  onChange={handleChange}
                />
                <TextField
                  id="companyWebsite"
                  label="Company Website"
                  name="companyWebsite"
                  value={companyWebsite}
                  onChange={handleChange}
                />
                <TextField
                  id="socialMediaLink"
                  label="Social Media Link"
                  name="socialMediaLink"
                  value={socialMediaLink}
                  onChange={handleChange}
                />
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: '20px 0' }} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit Changes
          </Button>
        </Box>
      </Card>
    </Layout>
  )
}
export default UserProfile
