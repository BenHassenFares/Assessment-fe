import React, { useEffect, useState } from 'react'

import ReactECharts from 'echarts-for-react'

import { Select, MenuItem } from '@mui/material'

import { candidateScore } from '../../APIs/assignment'
import { getAssessmentByRecruiter } from '../../APIs/assessmentAPI'

import '../charts.scss'

const BarSimple = () => {
  const [assessment, setAssessments] = useState([])
  const [selectedAssessment, setSelectedAssessment] = useState('')
  const [candidateScores, setCandidateScores] = useState([])

  useEffect(() => {
    const fetchAssessment = async () => {
      const assessment_data = await getAssessmentByRecruiter()
      setAssessments(assessment_data)
    }
    fetchAssessment()
  }, [])

  useEffect(() => {
    const fetchScore = async () => {
      if (selectedAssessment) {
        const data = await candidateScore(selectedAssessment)
        setCandidateScores(data)
      }
    }
    if (selectedAssessment) {
      fetchScore()
    }
  }, [selectedAssessment])
  const getChartData = () => {
    if (selectedAssessment) {
      const filteredAssignments = candidateScores.filter(
        (assignments) =>
          assignments.assignment.assessment.idAssessment === selectedAssessment,
      )
      const chartData = filteredAssignments.map((candidateScores) => ({
        name: candidateScores.assignment.candidateEmail.split('@')[0],
        value: candidateScores.score,
      }))
      return chartData
    }
    return []
  }

  const option = {
    xAxis: {
      type: 'category',
      data: getChartData().map((candidateScore) => candidateScore.name),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: getChartData(),
        type: 'bar',
      },
    ],
  }
  return (
    <div className="custom-chart-card">
      <div className="custom-chart-card-chart-container">
        <div className="custom-chart-card-chart">
          <Select
            labelId="demo-simple-select-label"
            displayEmpty
            value={selectedAssessment}
            onChange={(e) => setSelectedAssessment(e.target.value)}
          >
            <MenuItem value="">
              <em>Select an option</em>
            </MenuItem>
            {assessment?.map((item) => (
              <MenuItem key={item?.idAssessment} value={item?.idAssessment}>
                {item?.title}
              </MenuItem>
            ))}
          </Select>
          {selectedAssessment && <ReactECharts option={option} />}
        </div>
      </div>
    </div>
  )
}

export default BarSimple
