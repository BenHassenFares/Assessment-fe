import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'

import Layout from '../../Components/layout/layout'
import { getAssessmentByRecruiter } from '../../APIs/assessmentAPI'
import { sortData } from './utils'

import './style.scss'

const ListAssessments = () => {
  const [assessment, setAssessments] = useState([])
  const navigate = useNavigate()
  const create = () => navigate('/create-assessment')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(8)
  const [sortingOption, setSortingOption] = useState('')
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value)
  }

  const sortedData = sortData(assessment, sortingOption)
  useEffect(() => {
    const fetchAssessment = async () => {
      const data = await getAssessmentByRecruiter()
      setAssessments(data)
    }
    fetchAssessment()
  }, [])

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const view = (idAssessment) => navigate(`/view-assessment/${idAssessment}`)
  return (
    <Layout>
      <div className="assessments-list-content">
        <TableContainer component={Paper}>
          <div className="table">
            <Button className="table-btn" primary onClick={create}>
              Create assessment
            </Button>
            <FormControl
              variant="outlined"
              sx={{ minWidth: 180 }}
              className="sort-btn"
            >
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortingOption}
                onChange={handleSortingChange}
                label="Sort By"
              >
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="title">Title</MenuItem>
                <MenuItem value="theme">Description</MenuItem>
                <MenuItem value="date">Date</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="table-wrapper">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell hidden></TableCell>
                  <TableCell style={{ fontWeight: '700' }}>Title</TableCell>
                  <TableCell style={{ fontWeight: '700' }}>
                    Description
                  </TableCell>
                  <TableCell style={{ fontWeight: '700' }}>Date</TableCell>
                  <TableCell style={{ fontWeight: '700' }}>Modify</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? sortedData?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                  : sortedData
                )?.map((row) => (
                  <TableRow
                    key={row?.idAssessment}
                    onClick={() => view(row.idAssessment)}
                  >
                    <TableCell></TableCell>
                    <TableCell> {row?.title} </TableCell>
                    <TableCell>{row?.theme}</TableCell>
                    <TableCell>{row?.dateCreation}</TableCell>
                    <TableCell>
                      <SettingsSuggestIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={assessment?.length}
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
export default ListAssessments
