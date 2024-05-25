import { useEffect, useState } from 'react'

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import AssignCandidate from '../../Components/assign-candidate'
import Layout from '../../Components/layout/layout'
import { sortData } from './utils'
import { getAssignmentByRecruiter } from '../../APIs/assignment'
import AssignmentDialog from '../../Components/assignment-dialog'

import './style.scss'

const AssignedAssessments = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(8)
  const [sortingOption, setSortingOption] = useState('')
  const [assignments, setAssignments] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  useEffect(() => {
    const fetchAssignments = async () => {
      const data = await getAssignmentByRecruiter()
      setAssignments(data)
    }
    fetchAssignments()
  }, [])
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const sortedData = sortData(assignments, sortingOption)
  const [openPopup, setOpenPopup] = useState(false)
  const handleAssignCandidates = () => {
    setOpenPopup(true)
  }
  const handleClosePopup = () => {
    setOpenPopup(false)
  }

  const handleOpenDialog = (index) => {
    setSelectedCandidate(sortedData[index])
    setOpenDialog(index)
  }
  const handleCloseDialog = () => {
    setOpenDialog(false)
    setSelectedCandidate(null)
  }
  return (
    <Layout>
      <div className="assignment">
        <TableContainer component={Paper}>
          <div className="table">
            <Button className="table-btn" onClick={handleAssignCandidates}>
              + Assign candidates
            </Button>
            {openPopup && <AssignCandidate onClose={handleClosePopup} />}
            <div className="table-btn-title">
              <div>
                <FormControl
                  variant="outlined"
                  sx={{ minWidth: 180, paddingRight: '40%' }}
                >
                  <InputLabel>Sort By</InputLabel>
                  <Select
                    value={sortingOption}
                    onChange={handleSortingChange}
                    label="Sort By"
                  >
                    <MenuItem value="default">Default</MenuItem>
                    <MenuItem value="status">Status</MenuItem>
                    <MenuItem value="score">Score</MenuItem>
                    <MenuItem value="date">Date</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="table-wrapper">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: '700' }}>
                    Candidate Name
                  </TableCell>
                  <TableCell style={{ fontWeight: '700' }}>Status</TableCell>
                  <TableCell style={{ fontWeight: '700' }}>title</TableCell>
                  <TableCell style={{ fontWeight: '700' }}>Score</TableCell>
                  <TableCell style={{ fontWeight: '700' }}>
                    Submitted AT
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? sortedData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                  : sortedData
                ).map((row, index) => (
                  <TableRow key={row.idAssign}>
                    <TableCell onClick={() => handleOpenDialog(index)}>
                      {row.candidateEmail}
                      {openDialog === index && (
                        <AssignmentDialog
                          open={openDialog === index}
                          onClose={handleCloseDialog}
                          selectedCandidate={row}
                        />
                      )}
                    </TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.assessment?.title}</TableCell>
                    <TableCell>
                      {row.submittedassessment
                        ? row.submittedassessment.totalscore
                        : 'N/A'}
                    </TableCell>
                    <TableCell>
                      {row.submittedassessment?.submittedDate || 'N/A'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={assignments.length}
            rowsPerPage={rowsPerPage}
            page={page}
            style={{ paddingTop: '20px' }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </Layout>
  )
}
export default AssignedAssessments
