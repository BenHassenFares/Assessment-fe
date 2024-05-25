import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Typography, Button, Box, TextField } from '@mui/material'
import Layout from '../../Components/layout/layout'
import CodingProblem from '../../Components/coding-problem'
import QuestionsCard from '../../Components/question-card'
import './style.scss'
import { getAssessmentById, generatePDF } from '../../APIs/assessmentAPI'

const ViewAssessment = () => {
  const [assessment, setAssessment] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const fetchAssessment = async () => {
      try {
        const data = await getAssessmentById(id)
        setAssessment(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAssessment()
  }, [])
  const handleGeneratePdf = async (assessmentId) => {
    const pdfBlob = await generatePDF(assessmentId)
    if (pdfBlob) {
      const pdfUrl = URL.createObjectURL(pdfBlob)
      window.open(pdfUrl)
    } else {
      console.log('Failed to generate PDF')
    }
  }
  return (
    <Layout>
      <div className="view-assessment-frame">
        {assessment && (
          <Box className="view-assessment-frame-box-container">
            <Box className="view-assessment-frame-grey-box">
              <Typography variant="h6" color="white">
                {assessment.title}
              </Typography>
            </Box>
            <Box>
              <TextField
                className="view-assessment-frame-description"
                value={assessment.theme}
                multiline
                autoFocus
                fullWidth
                disabled
              />
            </Box>
            <Container className="main-container">
              {assessment.coding.map((codingProblem) => (
                <div key={codingProblem.id} className="card-container">
                  <CodingProblem data={codingProblem} objective="view" />
                </div>
              ))}
              {assessment.questions.map((questions) => (
                <div key={questions.id} className="card-container">
                  <QuestionsCard questionData={questions} objective="view" />
                </div>
              ))}
            </Container>
          </Box>
        )}
        <Button variant="outlined" onClick={() => handleGeneratePdf(id)}>
          Download
        </Button>
      </div>
    </Layout>
  )
}
export default ViewAssessment
