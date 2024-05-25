import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react'

import { assessmentByRecruiterCountByMonth } from '../../APIs/assessmentAPI'
import { assignmentByRecruiterCountByMonth } from '../../APIs/assignment'

import '../charts.scss'

const LineSimple = () => {
  const [assessmentData, setAssessmentData] = useState([])
  const [assignmentData, setAssignmentData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const assessmentResponse = await assessmentByRecruiterCountByMonth()
      const assignmentResponse = await assignmentByRecruiterCountByMonth()
      setAssessmentData(assessmentResponse)
      setAssignmentData(assignmentResponse)
    }
    fetchData()
  }, [])

  const months = Array.from({ length: 12 }, (_, index) =>
    (index + 1).toString(),
  )
  const assessmentCounts = months.map(
    (month) =>
      assessmentData.find((entry) => entry.month === month)?.count || 0,
  )

  const assignmentCounts = months.map(
    (month) =>
      assignmentData.find((entry) => entry.month === month)?.count || 0,
  )

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    xAxis: {
      type: 'category',
      nameLocation: 'middle',
      data: months,
    },
    yAxis: {},
    series: [
      {
        name: 'Assessments',
        type: 'line',
        data: assessmentCounts,
      },
      {
        name: 'Assignments',
        type: 'line',
        data: assignmentCounts,
      },
    ],
  }

  return (
    <div className="custom-chart-card">
      <div className="custom-chart-card-chart-container">
        <div className="custom-chart-card-chart">
          <ReactECharts option={option} />
        </div>
      </div>
    </div>
  )
}

export default LineSimple
