import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  Card,
  Button,
  CardContent,
  DialogTitle,
  Tab,
  Tabs,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Box,
  Typography,
  Checkbox,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'
import './style.scss'

const CustomDialog = ({ onClose, addCodingProblem, onAddQuestion }) => {
  const [stateQuestion, setStateQuestion] = useState({
    score: 0,
    statement: '',
  })
  const [stateCode, setStateCode] = useState({
    language: 'Any',
    problem: '',
  })
  const [activeTab, setActiveTab] = useState(0)
  const [selectedType, setSelectedType] = useState('SingleChoice')
  const [options, setOptions] = useState([
    { id: 1, value: 'Option 1', checked: false },
    { id: 2, value: 'Option 2', checked: false },
    { id: 3, value: 'Option 3', checked: false },
  ])
  const [confirmEnabled, setConfirmEnabled] = useState(false) // state for enabling/disabling Confirm button
  const disableConfirmCode = !stateCode.problem

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value)
    if (event.target.value !== 'Text') {
      const newOptions = options.map((option) => ({
        ...option,
        checked: false,
      }))
      setOptions(newOptions)
      setConfirmEnabled(false)
    } else {
      setOptions([])
      setConfirmEnabled(true)
    }
  }

  const handleScoreChange = (event) => {
    setStateQuestion((prevState) => ({
      ...prevState,
      score: event.target.value,
    }))
  }
  const handleConfirmCode = () => {
    const newCodingProblem = {
      id: Date.now(),
      language: stateCode.language,
      problem: stateCode.problem,
    }
    addCodingProblem(newCodingProblem)
    handleClose()
  }

  const handleOptionChange = (index) => {
    const newOptions = [...options]
    let atLeastOneOptionSelected = false

    if (selectedType === 'SingleChoice') {
      newOptions.forEach((option, i) => {
        if (i === index) {
          option.checked = true
          atLeastOneOptionSelected = true
        } else {
          option.checked = false
        }
      })
    } else {
      newOptions[index].checked = !newOptions[index].checked
      atLeastOneOptionSelected = newOptions.some((option) => option.checked)
    }

    setOptions(newOptions)
    setConfirmEnabled(atLeastOneOptionSelected) // Update Confirm button state
  }

  const handleOptionTextChange = (e, index) => {
    const newOptions = [...options]
    newOptions[index].value = e.target.value
    setOptions(newOptions)
  }

  const handleAddOption = () => {
    if (options.length < 10) {
      const newOptions = [
        ...options,
        { id: Date.now(), value: ' ', placeholder: 'option', checked: false },
      ]
      setOptions(newOptions)
    }
  }

  const handleDeleteOption = (optionId) => {
    const newOptions = options.filter((option) => option.id !== optionId)
    setOptions(newOptions)
    setConfirmEnabled(false) // Reset Confirm button state
  }

  const handleConfirmQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      type: selectedType,
      statement: stateQuestion.statement,
      score: stateQuestion.score,
      options: options,
    }
    onAddQuestion(newQuestion)
    handleClose()
  }
  const handleClose = () => {
    onClose()
  }
  return (
    <Dialog
      open={true}
      fullWidth
      maxWidth="md"
      className="assessment-dialog"
      onClose={handleClose}
    >
      <DialogTitle className="assessment-dialog-title">
        <Tabs value={activeTab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Question" className="tab" />
          <Tab label="Coding Problem" className="tab" />
        </Tabs>
      </DialogTitle>
      <DialogContent className="assessment-dialog-content">
        {activeTab === 0 && (
          <Box className="assessment-dialog-content-first-tab">
            <div className="assessment-dialog-content-first-tab-left-side">
              <div className="question-type">
                <Typography className="question-type-title">
                  Question type:
                </Typography>
                <Box className="question-type-options">
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="questionType"
                      name="questionType"
                      value={selectedType}
                      onChange={handleTypeChange}
                    >
                      <FormControlLabel
                        value="SingleChoice"
                        control={<Radio />}
                        label="Single Choice Answer"
                      />
                      <FormControlLabel
                        value="MultipleChoice"
                        control={<Radio />}
                        label="Multiple Answer"
                      />
                      <FormControlLabel
                        value="Text"
                        control={<Radio />}
                        label="Text"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </div>
              <Box className="question-type">
                <Typography className="question-type-title">Score:</Typography>
                <TextField
                  variant="outlined"
                  value={stateQuestion.score}
                  onChange={handleScoreChange}
                  type="number"
                  className="question-type-options"
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                className="confirm-button"
                disabled={!confirmEnabled}
                onClick={handleConfirmQuestion}
              >
                Confirm
              </Button>
            </div>
            <div className="assessment-dialog-content-first-tab-divider" />
            <Box className="assessment-dialog-content-first-tab-right-side">
              <Box className="question-type">
                <Typography className="question-type-title">
                  Questions:
                </Typography>
                <TextField
                  fullWidth
                  sx={{ m: 1 }}
                  id="fullWidth"
                  multiline
                  variant="outlined"
                  value={stateQuestion.statement}
                  onChange={(event) =>
                    setStateQuestion((prevState) => ({
                      ...prevState,
                      statement: event.target.value,
                    }))
                  }
                />
              </Box>
              {selectedType !== 'Text' && (
                <Box className="option-container">
                  {options.map((option, index) => (
                    <div
                      key={option.id}
                      className="option-container-option-row"
                    >
                      {selectedType === 'SingleChoice' ? (
                        <Radio
                          checked={option.checked}
                          onChange={() => handleOptionChange(index)}
                        />
                      ) : (
                        <Checkbox
                          checked={option.checked}
                          onChange={() => handleOptionChange(index)}
                        />
                      )}
                      <TextField
                        variant="outlined"
                        multiline
                        placeholder={`Option ${option.id}`}
                        value={option.value}
                        onChange={(e) => handleOptionTextChange(e, index)}
                        className="option-textfield"
                      />
                      {(selectedType === 'SingleChoice' &&
                        options.length > 2) ||
                      (selectedType === 'MultipleChoice' &&
                        options.length > 3) ? (
                        <IconButton
                          onClick={() => handleDeleteOption(option.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      ) : null}
                    </div>
                  ))}
                  {options.length < 10 && (
                    <Button
                      variant="contained"
                      color="primary"
                      className="problem-card-content-confirm-button"
                      onClick={handleAddOption}
                    >
                      Add another option
                    </Button>
                  )}
                </Box>
              )}
            </Box>
          </Box>
        )}

        {activeTab === 1 && (
          <Box className="assessment-dialog-content-first-tab-question-card-container">
            <Card className="assessment-dialog-content-first-tab-problem-card">
              <CardContent className="problem-card-content">
                <Typography variant="subtitle1">
                  Please specify your coding problem below and make sure to fill
                  the expected output.
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Programming language:</InputLabel>
                  <Select
                    labelId="programming-language-select"
                    id="programming-language-select"
                    label="Programming language:"
                    defaultValue="Any"
                    value={stateCode.language}
                    onChange={(e) =>
                      setStateCode((prevState) => ({
                        ...prevState,
                        language: e.target.value,
                      }))
                    }
                  >
                    <MenuItem value="Any">Any</MenuItem>
                    <MenuItem value="Java">Java</MenuItem>
                    <MenuItem value="JavaScript">JavaScript</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="C++">C++</MenuItem>
                    <MenuItem value="C#">C#</MenuItem>
                    <MenuItem value="PHP">PHP</MenuItem>
                    <MenuItem value="GO">GO</MenuItem>
                    <MenuItem value="Python">Python</MenuItem>
                    <MenuItem value="Kotlin">Kotlin</MenuItem>
                    <MenuItem value="R">R</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  id="filled-multiline-flexible"
                  label="Response"
                  multiline
                  rows={5}
                  variant="outlined"
                  value={stateCode.problem}
                  onChange={(event) =>
                    setStateCode((prevState) => ({
                      ...prevState,
                      problem: event.target.value,
                    }))
                  }
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleConfirmCode}
                  className="confirm"
                  disabled={disableConfirmCode}
                >
                  Confirm
                </Button>
              </CardContent>
            </Card>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default CustomDialog
