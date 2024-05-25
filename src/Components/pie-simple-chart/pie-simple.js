import { useEffect, useState } from 'react'

import ReactECharts from 'echarts-for-react'

import { getAssignmentByRecruiter } from '../../APIs/assignment'

import '../charts.scss'

const PieSimple = () => {
  const [assignments, setAssignments] = useState([])
  useEffect(() => {
    const fetchAssignments = async () => {
      const data = await getAssignmentByRecruiter()
      setAssignments(data)
    }
    fetchAssignments()
  }, [])

  const StatusCount = { Pending: 0, Completed: 0, Expired: 0 }
  assignments.forEach((assignments) => {
    if (assignments.status === 'Pending') {
      StatusCount.Pending++
    } else if (assignments.status === 'Completed') {
      StatusCount.Completed++
    } else if (assignments.status === 'Expired') {
      StatusCount.Expired++
    }
  })
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Number of Assignments',
        type: 'pie',
        radius: '75%',
        data: [
          { value: StatusCount.Pending, name: 'Pending' },
          { value: StatusCount.Completed, name: 'Completed' },
          { value: StatusCount.Expired, name: 'Expired' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
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

export default PieSimple
