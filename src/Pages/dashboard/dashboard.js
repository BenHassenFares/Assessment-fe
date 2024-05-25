import { useEffect, useState } from 'react'
import { useKeycloak } from '@react-keycloak/web'

// material-ui
import { Grid } from '@mui/material'

import Layout from '../../Components/layout/layout'
import {
  numberOfAssignmentsByRecruiter,
  numberOfCandidatesByRecruiter,
} from '../../APIs/assignment'
import LineSimple from '../../Components/line-simple-chart'
import PieSimple from '../../Components/pie-simple-chart'
import BarSimple from '../../Components/bar-simple-chart'
import DashboardSmallCard from '../../Components/dashboard-small-card'
import { numberOfAssessmentsByRecruiter } from '../../APIs/assessmentAPI'
// project imports
// import EarningCard from './EarningCard'
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
// import { gridSpacing } from 'store/constant'

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const { keycloak } = useKeycloak()
  const [candidates, setCandidates] = useState()
  useEffect(() => {
    const fetchNumber = async () => {
      const number = await numberOfCandidatesByRecruiter()
      setCandidates(number)
    }
    fetchNumber()
  }, [])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  const [assignments, setAssignments] = useState()
  useEffect(() => {
    const fetchNumber = async () => {
      const number = await numberOfAssignmentsByRecruiter()
      setAssignments(number)
    }
    fetchNumber()
  }, [])
  const [assessments, setAssessments] = useState()
  useEffect(() => {
    const fetchNumber = async () => {
      const number = await numberOfAssessmentsByRecruiter()
      setAssessments(number)
    }
    fetchNumber()
  }, [])
  console.log(keycloak.token)
  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <DashboardSmallCard
                text={'Number of Candidates'}
                apiData={candidates}
                icon="candidate"
              />
            </Grid>
            <Grid item xs={3}>
              <DashboardSmallCard
                text={'Number of Assignments'}
                apiData={assignments}
                icon="assignment"
              />
            </Grid>
            <Grid item xs={4}>
              <DashboardSmallCard
                text={'Number of Assessments'}
                apiData={assessments}
                icon="assessment"
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
              <BarSimple />
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={5}>
              {/* <PopularCard isLoading={isLoading} /> */}
              <PieSimple isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={10}>
              <LineSimple isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Dashboard
