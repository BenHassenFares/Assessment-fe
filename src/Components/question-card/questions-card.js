import React, { useState, useEffect } from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Radio,
  FormControl,
  FormLabel,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import './style.scss'

const QuestionsCard = ({ questionData, onDelete, objective }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [answer, setAnswer] = useState()
  const handleDelete = () => {
    onDelete(questionData.id)
  }
  useEffect(() => {
    if (questionData.type !== 'text') {
      const defaultOptions = questionData.options
        .filter((option) => option.checked)
        .map((option) => option.value)

      setSelectedOptions(defaultOptions)
    }
  }, [questionData])

  const handleChange = (event) => {
    const selectedOptionValue = event.target.value
    setSelectedOptions((prevSelectedOptions) => {
      if (questionData.type === 'multiple') {
        return prevSelectedOptions.includes(selectedOptionValue)
          ? prevSelectedOptions.filter(
              (option) => option !== selectedOptionValue,
            )
          : [...prevSelectedOptions, selectedOptionValue]
      } else {
        return [selectedOptionValue]
      }
    })
  }
  const renderQuestionOptions = () => {
    if (questionData.type === 'text') {
      if (objective === 'submit') {
        return (
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            placeholder="Type your answer here"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
          />
        )
      } else {
        return null
      }
    }
    if (objective === 'view') {
      return (
        <div>
          <Typography variant="body1">Answers :</Typography>
          {questionData.options.map((option) => (
            <div key={option.id}>
              <Typography variant="body1" className="option-label">
                • {option.option}
              </Typography>
            </div>
          ))}
        </div>
      )
    }
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Options :</FormLabel>
        {questionData.options.map((option) => (
          <FormControlLabel
            key={option.id}
            value={option.value}
            control={
              questionData.type === 'multiple' ? (
                <Checkbox
                  checked={selectedOptions.includes(option.value)}
                  onChange={handleChange}
                  value={option.value}
                />
              ) : (
                <Radio
                  checked={selectedOptions[0] === option.value}
                  onChange={handleChange}
                  value={option.value}
                />
              )
            }
            label={option.value}
          />
        ))}
      </FormControl>
    )
  }

  return (
    <Box className="question">
      <Card className="question-card">
        <CardContent className="question-card-content">
          <Typography variant="h6">
            {questionData.statement}
            <Typography variant="body1" className="question-card-score">
              (Score: {questionData.score})
            </Typography>
          </Typography>

          {renderQuestionOptions()}
        </CardContent>
        {objective === 'create' && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleDelete}
            startIcon={<DeleteIcon />}
            sx={{ marginTop: '8px', alignSelf: 'flex-start' }}
          >
            Delete
          </Button>
        )}
      </Card>
    </Box>
  )
}

export default QuestionsCard
