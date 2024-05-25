import React from 'react'

import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import { Typography } from '@mui/material'

import logo2 from '../../Images/newlogo-removebg-preview.png'

import './style.scss'

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-x">
        <div className="icons">
          <TwitterIcon
            className="icons-element"
            sx={{ color: '#fff', fontSize: 30 }}
          />
          <FacebookIcon
            className="icons-element"
            sx={{ color: '#fff', fontSize: 30 }}
          />
          <InstagramIcon
            className="icons-element"
            sx={{ color: '#fff', fontSize: 30 }}
          />
          <TelegramIcon
            className="icons-element"
            sx={{ color: '#fff', fontSize: 30 }}
          />
        </div>
        <img alt="logo" src={logo2} height={40} />
        <Typography className="typography-small"> © 2023 TestRoom</Typography>
      </div>
    </div>
  )
}

export default Footer
