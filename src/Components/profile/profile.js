import React, { useRef, useState, useEffect } from 'react'
import { useKeycloak } from '@react-keycloak/web'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import SendIcon from '@mui/icons-material/Send'
import BusinessIcon from '@mui/icons-material/Business'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Box from '@mui/material/Box'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

import Layout from '../layout/layout'
import file_upload from '../../Images/file_upload.svg'

import './style.scss'

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [telephone, setTelephone] = useState('')
  const [isValid, setIsValid] = useState(true)
  const { keycloak } = useKeycloak()
  const [userState, setUserState] = useState({
    givenName: '',
    email: '',
    userName: '',
    lastName: '',
  })

  const fileInputRef = useRef(null)

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
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(URL.createObjectURL(file))

    console.log(file)
  }
  const handleChange = (e) => {
    const input = e.target.value
    const regex = /^\+216\s\d{2}\s\d{3}\s\d{3}$/

    if (regex.test(input)) {
      setTelephone(input)
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <Layout>
      <div className="profile-frame-container">
        <div className="profile-frame-container-center">
          <div className="profile-frame-container-image-button-textfield-row-container">
            <div className="profile-frame-container-image-button-container">
              <div className="profile-frame-container-imageContainer">
                <Avatar
                  src={selectedImage || '/static/images/avatar/1.jpg'}
                  sx={{
                    width: { xs: 100, sm: 800, md: 200 },
                    height: { xs: 500, sm: 800, md: 200 },
                  }}
                />
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="profile-frame-container-input-file-upload-image"
                    onChange={handleFileChange}
                  />
                  <img
                    src={file_upload}
                    alt="Overlay"
                    className="profile-frame-container-file_upload"
                    onClick={handleButtonClick}
                  />
                </div>
              </div>
              <div className="profile-frame-container-button-confirm-edit">
                <Button
                  size="medium"
                  className="edit-button"
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={handleButtonClick}
                >
                  Edit
                </Button>
                <Button
                  size="medium"
                  variant="contained"
                  className="confirm-button"
                  endIcon={<SendIcon />}
                >
                  Confirm
                </Button>
              </div>
            </div>

            <div className="profile-frame-container-form-container">
              <div className="profile-frame-container-form-container-textfield-container">
                <div className="profile-frame-container-form-container-profile-text">
                  User Profile
                </div>
                <div className="profile-frame-container-form-container-text-field-rows">
                  <Box className="profile-frame-container-form-container-profile-icons">
                    <AccountCircle className="profile-frame-container-form-container-edit-icon" />
                    <TextField
                      id="input-with-sx"
                      label="Username"
                      value={userState.userName}
                      variant="standard"
                      disabled
                      InputProps={{ startAdornment: <Box width={0.01}></Box> }}
                    />
                  </Box>
                  <Box className="profile-frame-container-form-container-profile-icons">
                    <EmailIcon className="profile-frame-container-form-container-edit-icon" />
                    <TextField
                      id="input-with-sx"
                      label="Email"
                      value={userState.email}
                      variant="standard"
                      disabled
                      InputProps={{ startAdornment: <Box width={0.01}></Box> }}
                    />
                  </Box>
                </div>
                <div className="profile-frame-container-form-container-text-field-rows">
                  <Box className="profile-frame-container-form-container-profile-icons">
                    <AccountCircle className="profile-frame-container-form-container-edit-icon" />
                    <TextField
                      id="input-with-sx"
                      label="Name"
                      value={userState.givenName}
                      variant="standard"
                      InputProps={{ startAdornment: <Box width={0.01}></Box> }}
                    />
                  </Box>
                  <Box className="profile-frame-container-form-container-profile-icons">
                    <AccountCircle className="profile-frame-container-form-container-edit-icon" />
                    <TextField
                      id="input-with-sx"
                      label="Last Name"
                      value={userState.lastName}
                      variant="standard"
                      InputProps={{ startAdornment: <Box width={0.01}></Box> }}
                    />
                  </Box>
                </div>
                <div className="profile-frame-container-form-container-text-field-rows">
                  <Box className="profile-frame-container-form-container-profile-icons">
                    <PhoneIcon className="profile-frame-container-form-container-edit-icon" />
                    <TextField
                      id="input-with-sx"
                      label="Phone Number "
                      variant="standard"
                      placeholder="+216 XX XXX XXX"
                      error={!isValid}
                      onChange={handleChange}
                      helperText={
                        !isValid ? 'Please enter a valid phone number.' : ''
                      }
                    />
                  </Box>
                  <Box className="profile-frame-container-form-container-profile-icons">
                    <BusinessIcon className="profile-frame-container-form-container-edit-icon" />
                    <TextField
                      id="input-with-sx"
                      label="Company Name"
                      variant="standard"
                    />
                  </Box>
                </div>
                <div className="profile-frame-container-form-container-text-field-rows">
                  <Box className="profile-frame-container-form-container-profile-icons">
                    <BusinessIcon className="profile-frame-container-form-container-edit-icon" />
                    <TextField
                      id="input-with-sx"
                      label="Company Website "
                      variant="standard"
                    />
                  </Box>
                  <Box className="profile-frame-container-form-container-profile-icons">
                    <BusinessIcon className="profile-frame-container-form-container-edit-icon" />
                    <TextField
                      id="input-with-sx"
                      label="Company Address"
                      variant="standard"
                    />
                  </Box>
                </div>

                <Box className="profile-frame-container-form-container-social-media-textfield">
                  <AlternateEmailIcon className="profile-frame-container-form-container-edit-icon" />
                  <TextField
                    id="input-with-sx"
                    label="Social media"
                    variant="standard"
                  />
                </Box>
                <div className="profile-frame-container-form-container-update-submit-button">
                  <Button className="submit-bottom">Submit</Button>
                </div>
                <div className="profile-frame-container-form-container-update-submit-button">
                  <Button variant="text">Update Password</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
