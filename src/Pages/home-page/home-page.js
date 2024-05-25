import React from 'react'

import { Box } from '@mui/material'

import img_money from '../../Images/sand-clock.png'
import img_secure from '../../Images/security-man.png'
import img_customize from '../../Images/monitor.png'
import Carousel from '../../Components/carousel/carousel'
import backgroundImg from '../../Images/pngwing.com.png'
import backgroundImg2 from '../../Images/image_a.png'
import backgroundImg3 from '../../Images/register-bg.jpg'
import Register from '../../Components/register/register'
import Footer from '../../Components/footer'
import Navbar from '../../Components/navbar'

import './style.scss'
const HomePage = () => {
  return (
    <Box className="home-page">
      <Navbar />
      <div
        className="home-page-banner"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="animated-title">
          <div className="title text-top">
            <div>
              <span>Join Our Pre-employment</span>
              <span>assessment platform</span>
            </div>
          </div>
          <div className="description text-bottom">
            <div>
              The use of our pre-employment assessment platform is enabling
              recruiters and companies to attract and engage a larger candidate
              pool.
            </div>
          </div>
        </div>
      </div>
      <div
        className="section"
        style={{ backgroundImage: `url(${backgroundImg2})` }}
      >
        <div className="section-title" id="work">
          How Does It Work?
        </div>
        <div className="section-subtitle">
          We establish trust with our customers by reassuring them that the
          process is quick, simple, and lucrative.
        </div>
        <div className="wrapper">
          <div className="card">
            <div className="circle">
              <span>1</span>
            </div>
            <div className="card-title">Join</div>
            <div className="card-subtitle">
              Tell users how <br />
              they can quickly join and become partners.
            </div>
          </div>
          <div className="card">
            <div className="circle">
              <span>2</span>
            </div>
            <div className="card-title">Create</div>
            <div className="card-subtitle">
              Create your own <br /> desired test through our customized tool.
            </div>
          </div>
          <div className="card">
            <div className="circle">
              <span>3</span>
            </div>
            <div className="card-title">Assess</div>
            <div className="card-subtitle">
              Invite a large <br /> pool of candidates to be assessed and
              evaluated.
            </div>
          </div>
        </div>
        <div className="section-title">Why you should become a member?</div>
        <div className="wrapper">
          <div className="card">
            <img
              className="image-small"
              height={70}
              src={img_customize}
              alt="+"
            />
            <div className="card-title">Customize</div>
            <div className="card-subtitle">
              Customizable Assessment Templates.
            </div>
          </div>
          <div className="card">
            <img className="image-small" height={70} src={img_secure} alt="+" />
            <div className="card-title">Secure</div>
            <div className="card-subtitle">
              The assessments are
              <br /> secured by browser lock-down and proctoring mechanisms
            </div>
          </div>
          <div className="card">
            <img className="image-small" height={70} src={img_money} alt="+" />
            <div className="card-title">Time</div>
            <div className="card-subtitle">
              Taking on a large <br />
              pool of candidate with simple clicks
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <div
        className="register-section"
        style={{ backgroundImage: `url(${backgroundImg3})` }}
      >
        <Register />
      </div>
      <Footer />
    </Box>
  )
}
export default HomePage
