import Card from '@mui/material/Card'
import Collapse from '@mui/material/Collapse'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import IconButton from '@mui/material/IconButton'
import { Typography } from '@mui/material'

import './style.scss'

const FAQ = ({ question, answer, index, expandedIndex, setExpandedIndex }) => {
  const expanded = index === expandedIndex
  const toggleExpand = () => {
    setExpandedIndex(expanded ? -1 : index)
  }
  return (
    <Card
      className="faq-card"
      sx={{ mb: 1, borderRadius: 4, backgroundColor: '#ffffffc9' }}
    >
      <CardHeader
        className="card-header"
        title={question}
        onClick={toggleExpand}
        action={
          <div
            className="icons"
            style={{
              display: 'flex',
              alignItems: 'center',
              border: 'rgba(238,241,245,1)',
            }}
          >
            <IconButton aria-label="expand" size="small">
              {expanded ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </div>
        }
      ></CardHeader>
      <div style={{ backgroundColor: 'rgba(211,211,211,0.4)' }}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body1" sx={{ color: 'rgba(121,141,163,1)' }}>
              {answer}
            </Typography>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  )
}
export default FAQ
