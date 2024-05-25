import React, { useState } from 'react'

import { Box } from '@mui/material'

import FAQ from '../../Components/faq/faq'
import faqData from '../../Components/faq/helper'
import backgroundImg from '../../Images/man-using-digital-tablet-psd-mockup-smart-technology.jpg'
import Navbar from '../../Components/navbar'
import Footer from '../../Components/footer'

import './style.scss'
const FaqPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  return (
    <Box>
      <Navbar />
      <div
        className="faq-page"
        id="faq"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="faq-page-title"> FAQ&apos;s </div>
        <div className="faq-page-subtitle">
          View the frequently asked questions below
        </div>
        {faqData?.map((faq, index) => (
          <FAQ
            key={index}
            index={index}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
            {...faq}
          />
        ))}
      </div>
      <Footer />
    </Box>
  )
}

export default FaqPage
