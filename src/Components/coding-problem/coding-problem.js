import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  TextField,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import './style.scss'

const CodingProblem = ({ data, onDelete, objective }) => {
  const handleDelete = () => {
    onDelete(data.id)
  }
  const [codeResponse, setCodeResponse] = useState('')
  let content
  switch (objective) {
    case 'create':
      content = (
        <>
          <FormControl fullWidth>
            <InputLabel>Programming language:</InputLabel>
            <Select
              labelId="programming-language-select"
              id="programming-language-select"
              label="Programming language:"
              defaultValue={data.language}
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
            className="problem-card-content-response"
            defaultValue={data.problem}
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleDelete}
            startIcon={<DeleteIcon />}
            sx={{ marginTop: '8px', alignSelf: 'flex-start' }}
          >
            Delete
          </Button>
        </>
      )
      break
    case 'view':
      content = <Typography variant="body1">{data.statement}</Typography>
      break
    case 'submit':
      content = (
        <>
          <TextField
            fullWidth
            id="filled-multiline-flexible"
            label="Response"
            multiline
            rows={5}
            variant="outlined"
            className="problem-card-content-response"
            defaultValue={data.problem}
            disabled
          />
          <TextField
            fullWidth
            id="filled-multiline-flexible"
            label="Your Code Response"
            multiline
            rows={5}
            variant="outlined"
            className="problem-card-content-response"
            value={codeResponse}
            onChange={(e) => setCodeResponse(e.target.value)}
          />
        </>
      )
      break
  }
  return (
    <div className="question-card-container">
      <Card className="problem-card">
        <CardContent className="problem-card-content">
          <Typography variant="h6">Problem N°{data.id}</Typography>
          {content}
        </CardContent>
      </Card>
    </div>
  )
}
export default CodingProblem
