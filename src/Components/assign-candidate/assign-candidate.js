import React, { useState, useEffect } from 'react'
import {
  Button,
  Dialog,
  FormControl,
  Select,
  MenuItem,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextareaAutosize,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

import { getAssessmentByRecruiter } from '../../APIs/assessmentAPI'
import { createAssignment } from '../../APIs/assignment'

import './style.scss'

const AssignCandidate = ({ onClose }) => {
  const [state, setState] = useState({
    mailtextFields: [{ id: 0, value: '' }],
    timerSet: false,
    timerDuration: '',
    screenshotTimer: '',
    selectedOption: '',
    selectedDate: '',
    today: new Date().toISOString().split('T')[0],
    restrictWeb: false,
    copyprintDisable: false,
    qaShuffle: false,
    recordAudio: false,
    recordVideo: false,
    recordScreen: false,
    recordScreenshot: false,
    message: '',
  })
  const [step, setStep] = useState(1)
  const [assessment, setAssessments] = useState([])

  const isButtonDisabledOptions = !state.selectedOption // Button is disabled if no option is selected
  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|fr|tn)$/
    return emailRegex.test(email)
  }
  useEffect(() => {
    const fetchAssessment = async () => {
      const assessment_data = await getAssessmentByRecruiter()
      setAssessments(assessment_data)
    }
    fetchAssessment()
  }, [])
  const handleGuideTextChange = (e) => {
    setState((prevState) => ({ ...prevState, message: e.target.value }))
  }
  const isButtonDisabledSubmit = state.mailtextFields.some((mailtextFields) => {
    const trimmedValue = mailtextFields.value.trim()
    return trimmedValue === '' || !isValidEmail(trimmedValue)
  })
  const handleBack = () => {
    setStep(step - 1)
  }
  const handleValidClick = () => {
    state.mailtextFields.forEach((field) => {
      handleAssign(field.value)
    })
    handleClose()
  }

  const handleClose = () => {
    onClose()
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handleDateChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      selectedDate: event.target.value,
    }))
  }

  const handleTimerSet = (event) => {
    setState((prevState) => ({
      ...prevState,
      timerDuration: event.target.value,
    }))
  }
  const handleScreenshotTimer = (event) => {
    setState((prevState) => ({
      ...prevState,
      screenshotTimer: event.target.value,
    }))
  }
  const handleEmail = (e, id) => {
    const updatedFields = state.mailtextFields.map((field) => {
      if (field.id === id) {
        return { ...field, value: e.target.value }
      }
      return field
    })
    setState((prevState) => ({ ...prevState, mailtextFields: updatedFields }))
  }
  const handleAddTextField = () => {
    setState((prevState) => ({
      ...prevState,
      mailtextFields: [
        ...prevState.mailtextFields,
        { id: Date.now(), value: '' },
      ],
    }))
  }

  const handleDeleteTextField = (id) => {
    const remainingFields = state.mailtextFields.filter(
      (field) => field.id !== id,
    )
    setState((prevState) => ({ ...prevState, mailtextFields: remainingFields }))
  }

  const parseTimeToDuration = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map((str) => parseInt(str))
    const duration = new Date()
    duration.setHours(hours)
    duration.setMinutes(minutes)
    return duration
  }

  const handleAssign = async (email) => {
    const assignedAssessmentData = {
      assessment: {
        idAssessment: state.selectedOption,
      },
      expirationDate: state.selectedDate,
      restrictWeb: state.restrictWeb,
      copyprintDisable: state.copyprintDisable,
      qaShuffle: state.qaShuffle,
      timerSeter: state.timerSet,
      timer: parseTimeToDuration(state.timerDuration),
      recordAudio: state.recordAudio,
      recordVideo: state.recordVideo,
      recordScreen: state.recordScreen,
      recordScreenshot: state.recordScreenshot,
      screenshotTimer: parseTimeToDuration(state.screenshotTimer),
      message: state.message,
      candidateEmail: email,
    }
    try {
      const response = await createAssignment(assignedAssessmentData)
      console.log('Data successfully stored in the database:', response)
      console.log(state.selectedOption)
      handleClose()
    } catch (error) {
      console.error('Error storing data in the database:', error)
    }
  }

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      className="assessment-dialog"
    >
      <DialogTitle className="assessment-dialog-title">
        Assigning Assessment To Candidate(s)
      </DialogTitle>
      <DialogContent>
        {step === 1 && (
          <>
            <Typography className="assessment-dialog-content-description">
              Please select an assessment from the list below of your own
              created assessments in order to proceed. The expiration date is
              optional.
            </Typography>

            <div className="assessment-dialog-content-row">
              <div className="label">Assessment : </div>
              <FormControl className="select-field">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  value={state.selectedOption}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      selectedOption: e.target.value,
                    }))
                  }
                >
                  <MenuItem value="">
                    <em>Select an option</em>
                  </MenuItem>
                  {assessment?.map((item) => (
                    <MenuItem
                      key={item?.idAssessment}
                      value={item?.idAssessment}
                    >
                      {item?.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="assessment-dialog-content-row">
              <div className="label">Expiration Date : </div>
              <input
                type="date"
                defaultValue=""
                onChange={handleDateChange}
                min={state.today} // Set the minimum date to today
                className={'text-field'}
              />
            </div>
          </>
        )}
        {step === 2 && (
          <div>
            <Typography className="assessment-dialog-content-description">
              Choose which option you would like to implement into the
              assessment
            </Typography>
            <div className="assessment-dialog-content-column-checkbox">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.restrictWeb}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        restrictWeb: e.target.checked,
                      }))
                    }
                  />
                }
                label="Restrict access to other websites with a number of offenses"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.copyprintDisable}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        copyprintDisable: e.target.checked,
                      }))
                    }
                  />
                }
                label="Disable 'COPY, Print and ScreenShot'"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.qaShuffle}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        qaShuffle: e.target.checked,
                      }))
                    }
                  />
                }
                label="Shuffle questions and answers"
              />
              <div className="assessment-dialog-content-row">
                <FormControlLabel
                  control={<Checkbox />}
                  checked={state.timerSet}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      timerSet: e.target.checked,
                    }))
                  }
                  label="Set a Time Limit"
                />
                <input
                  type="time"
                  onChange={handleTimerSet}
                  disabled={!state.timerSet}
                />
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <Typography className="assessment-dialog-content-description">
              Choose how would you like to monitor the candidate during the
              assessment
            </Typography>
            <div className="assessment-dialog-content-column-checkbox">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.recordAudio}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        recordAudio: e.target.checked,
                      }))
                    }
                  />
                }
                label="Session Audio Recording"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.recordVideo}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        recordVideo: e.target.value,
                      }))
                    }
                  />
                }
                label="Session Live Recording"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{}}
                    checked={state.recordScreen}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        recordScreen: e.target.checked,
                      }))
                    }
                  />
                }
                label="Session Screen Recording"
              />
              <div className="assessment-dialog-content-row">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Session Monitoring (ScreenShot)"
                  checked={state.recordScreenshot}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      recordScreenshot: e.target.checked,
                    }))
                  }
                />
                <input
                  type="time"
                  onChange={handleScreenshotTimer}
                  disabled={!state.recordScreenshot}
                />
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <Typography className="assessment-dialog-content-description">
              Insert a guide for candidate(s) to read and agree on before
              starting the assessment
            </Typography>

            <TextareaAutosize
              aria-label="Type here"
              rows={5} // Set the minimum number of rows to 6 (you can adjust this value)
              placeholder="Type here"
              value={state.message}
              onChange={handleGuideTextChange}
              className="assessment-dialog-content-text-area-insert-guide"
            />
            <div>
              <Typography className="assessment-dialog-content-description">
                Add a candidate&apos;s email in order to invite him/her to take
                your assessment. You can invite multiple candidates instead of
                one by one by clicking on the &quot;Add another candidate&quot;
                button.
              </Typography>
              <div className="assessment-dialog-content-candidates">
                {state.mailtextFields.map((textField) => (
                  <div
                    key={textField.id}
                    className="assessment-dialog-content-candidates-text-field"
                  >
                    <TextField
                      label="Candidate's email address"
                      value={textField.value}
                      onChange={(e) => handleEmail(e, textField.id)}
                    />
                    {state.mailtextFields.length > 1 && (
                      <IconButton
                        onClick={() => handleDeleteTextField(textField.id)}
                      >
                        <DeleteForeverOutlinedIcon />
                      </IconButton>
                    )}
                  </div>
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddTextField}
                  className="assessment-dialog-content-add-text-field"
                >
                  Add Another Candidate
                </Button>
              </div>
            </div>
          </div>
        )}
        {step === 1 || step === 2 || step === 3 ? (
          step === 1 ? (
            <div>
              <DialogActions>
                <Button
                  onClick={handleNextStep}
                  className={'assessment-dialog-content-next-button'}
                  disabled={isButtonDisabledOptions} // Disable the button if no option is selected
                >
                  Next
                </Button>
              </DialogActions>
            </div>
          ) : (
            <div className="assessment-dialog-content-button">
              <Button onClick={handleBack}>Back</Button>
              <Button onClick={handleNextStep}>Next</Button>
            </div>
          )
        ) : (
          <div className="assessment-dialog-content-button">
            <Button onClick={handleBack}>Back</Button>
            <Button
              onClick={handleValidClick}
              className="valid-button"
              disabled={isButtonDisabledSubmit}
            >
              Submit
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
export default AssignCandidate
