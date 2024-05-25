import React, { useState } from 'react'

import { Alert, Collapse, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const CustomAlert = ({ message, type }) => {
  const [open, setOpen] = useState(true)
  let severity = 'info'
  switch (type) {
    case 'error':
      severity = 'error'
      break
    case 'success':
      severity = 'success'
      break
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Collapse in={open}>
      <Alert
        severity={severity}
        variant="filled"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Collapse>
  )
}

export default CustomAlert
