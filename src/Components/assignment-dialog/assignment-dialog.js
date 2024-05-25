import React from 'react'

import { Dialog, DialogContent, DialogTitle } from '@mui/material'

import './style.scss'

const AssignmentDialog = ({ onClose, selectedCandidate }) => {
  return (
    <Dialog open={true} selectedCandidate onClose={onClose}>
      <DialogTitle className="popup-content-dialog-title">
        Candidate Details
      </DialogTitle>
      <DialogContent>
        <div className="popup-content-row">
          <p className="popup-content-row-p">Candidate mail :</p>
          <p>{selectedCandidate?.candidateEmail}</p>
        </div>
        <div className="popup-content-row">
          <p className="popup-content-row-p">Status :</p>
          <p>{selectedCandidate?.status}</p>
        </div>
        <div className="popup-content-row">
          <p className="popup-content-row-p">Title :</p>
          <p>{selectedCandidate?.assessment?.title}</p>
        </div>
        <div className="popup-content-row">
          <p className="popup-content-row-p">Score:</p>
          <p>{selectedCandidate?.submittedassessment?.totalscore}</p>
        </div>
        <div className="popup-content-row">
          <p className="popup-content-row-p">Submitted AT :</p>
          <p>{selectedCandidate?.submittedassessment?.submittedDate}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default AssignmentDialog
