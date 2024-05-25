import React from 'react'

import GroupIcon from '@mui/icons-material/Group'
import ArticleIcon from '@mui/icons-material/Article'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
import './style.scss'

const DashboardSmallCard = ({ text, apiData, icon }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case 'candidate':
        return <GroupIcon />
      case 'assessment':
        return <DocumentScannerIcon />
      case 'assignment':
        return <ArticleIcon />
    }
  }
  return (
    <div className="dashboard-card">
      <h2 className="dashboard-card-title">{text}</h2>
      <ul>
        <li className="dashboard-card-content">{apiData}</li>
      </ul>
      {renderIcon(icon)}
    </div>
  )
}

export default DashboardSmallCard
