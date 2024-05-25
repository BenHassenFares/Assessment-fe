import React, { useState } from 'react'

import { Container, Typography, Button, Box, TextField } from '@mui/material'

import Layout from '../../Components/layout/layout'
import CodingProblem from '../../Components/coding-problem'
import QuestionsCard from '../../Components/question-card'
import { createAssessment } from '../../APIs/assessmentAPI'
import AssessmentDialog from '../../Components/assessment-dialog'
import CustomAlert from '../../Components/alert'

import './style.scss'

const CreateAssessment = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [assessmentTitle, setAssessmentTitle] = useState('Untitled Assessment')
  const [description, setDescription] = useState(
    'Double click on this message to write your description here',
  )
  const [isEditingDescription, setIsEditingDescription] = useState(false)
  const [codingProblems, setCodingProblems] = useState([])
  const [questions, setQuestions] = useState([])
  const [stateAlert, setStateAlert] = useState({
    open: false,
    message: '',
    type: '',
  })
  const handleCloseErrorAlert = () => {
    setStateAlert((prevState) => ({ ...prevState, open: false }))
  }
  const addCodingProblem = (newCodingProblem) => {
    setCodingProblems([...codingProblems, newCodingProblem])
  }
  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }
  const handleDescriptionDoubleClick = () => {
    setIsEditingDescription(true)
  }
  const handleDescriptionBlur = () => {
    setIsEditingDescription(false)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const handleDeleteCodingProblem = (codingProblemId) => {
    const updatedCodingProblems = codingProblems.filter(
      (codingProblem) => codingProblem.id !== codingProblemId,
    )
    setCodingProblems(updatedCodingProblems)
  }
  const handleDeleteQuestion = (questionId) => {
    const updatedQuestions = questions.filter(
      (question) => question.id !== questionId,
    )
    setQuestions(updatedQuestions)
  }
  const handleOpenPopUp = () => {
    setOpenPopup(true)
  }
  const handleClosePopup = () => {
    setOpenPopup(false)
  }
  const handleSave = async () => {
    if (codingProblems.length === 0 && questions.length === 0) {
      setStateAlert((prevState) => ({
        ...prevState,
        open: true,
        message: 'Cannot create an empty Assessment',
        type: 'error',
      }))
    } else {
      const assessmentData = {
        title: assessmentTitle,
        // description,
        coding: codingProblems.map((problem) => {
          return {
            language: problem.language,
            statement: problem.problem,
          }
        }),
        questions: questions.map((q) => {
          return {
            statement: q.question,
            score: q.score,
            typequestion: q.type,
            options: q.options.map((o) => {
              return {
                option: o.value,
                isCorrect: o.checked,
              }
            }),
          }
        }),
      }
      try {
        const response = await createAssessment(assessmentData)
        console.log('Data successfully stored in the database:', response)
        setStateAlert((prevState) => ({
          ...prevState,
          open: true,
          message:
            'Assessment created successfully and you will be redirected shortly',
          type: 'success',
        }))
        console.log(assessmentData)
        setTimeout(() => {
          window.location.href = '/List-assessment'
        }, 2000)
      } catch (error) {
        console.error('Error storing data in the database:', error)
      }
    }
  }
  return (
    <Layout>
      <div className="assessment-frame">
        <div className="assessment-frame-button">
          <Button variant="outlined" onClick={handleSave}>
            Save
          </Button>
          {stateAlert.open && (
            <CustomAlert
              message={stateAlert.message}
              type={stateAlert.type}
              onClose={handleCloseErrorAlert}
            />
          )}
          <div>
            <Button
              className="assessment-frame-create-button"
              variant="outlined"
              onClick={handleOpenPopUp}
              sx={{
                marginLeft: '20px',
                color: 'blue',
                borderBlockColor: 'black',
              }}
            >
              Create New
            </Button>
            {openPopup && (
              <AssessmentDialog
                onClose={handleClosePopup}
                addCodingProblem={addCodingProblem}
                onAddQuestion={handleAddQuestion}
              />
            )}
          </div>
        </div>
        <Box className="assessment-frame-box-container">
          <Box className="assessment-frame-grey-box">
            <Typography variant="h6">
              <input
                type="text"
                value={assessmentTitle}
                onChange={(e) => setAssessmentTitle(e.target.value)}
                className="assessment-title-input"
              />
            </Typography>
          </Box>
          <Box className="assessment-frame-description">
            {isEditingDescription ? (
              <TextField
                value={description}
                onChange={handleDescriptionChange}
                onBlur={handleDescriptionBlur}
                multiline
                autoFocus
                fullWidth
                inputProps={{ style: { color: 'white' } }} // Text color
                InputProps={{ style: { color: 'white' } }} // Cursor color
              />
            ) : (
              <div onDoubleClick={handleDescriptionDoubleClick}>
                {description.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            )}
          </Box>
          <Container className="main-container">
            {codingProblems.map((codingProblem) => (
              <div key={codingProblem.id} className="card-container">
                <CodingProblem
                  data={codingProblem}
                  onDelete={() => handleDeleteCodingProblem(codingProblem.id)}
                  objective="create"
                />
              </div>
            ))}
            {questions.map((questions) => (
              <div key={questions.id} className="card-container">
                <QuestionsCard
                  questionData={questions}
                  onDelete={() => handleDeleteQuestion(questions.id)}
                  objective="create"
                />
              </div>
            ))}
          </Container>
        </Box>
      </div>
    </Layout>
  )
}
export default CreateAssessment
