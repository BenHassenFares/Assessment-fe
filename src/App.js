import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './Keycloak'
import PrivateRoute from './Helpers/private-route'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import HomePage from './Pages/home-page'
import Dashboard from './Pages/dashboard/dashboard'
import ListAssessments from './Pages/list-assessments'
import AssignedAssessments from './Pages/assigned-assessments'
import CreateAssessment from './Pages/create-assessment'
import FaqPage from './Pages/faq-page'
import ViewAssessment from './Pages/view-assessment'
import Profile from './Components/profile'
import UserProfile from './Components/profile/user-profile'
import Contact from './Components/contact'

import './App.css'

export const maintheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#002b96',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#F9F7F7',
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: '3.194vw',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2.778vw',
    },
    h3: {
      fontWeight: 400,
      fontSize: '2.500vw',
    },
    h4: {
      fontWeight: 400,
      fontSize: '2.083vw',
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.736vw',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.389vw',
    },
    body1: {
      fontWeight: 200,
    },
    body2: {
      fontWeight: 100,
      fontSize: '0.875rem',
    },
    overline: {
      // fontFamily: 'Roboto',
    },
    subtitle2: {
      fontSize: '0.9rem',
      fontWeight: 700,
    },
    date: {
      fontSize: '0.8rem',
      fontWeight: 500,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={maintheme}>
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/list-assessment"
              element={
                <PrivateRoute>
                  <ListAssessments />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/list-assignment"
              element={
                <PrivateRoute>
                  <AssignedAssessments />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/faq" element={<FaqPage />}></Route>
            <Route
              path="/profile-old"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/contact"
              element={
                <PrivateRoute>
                  <Contact />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/create-assessment"
              element={
                <PrivateRoute>
                  <CreateAssessment />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/view-assessment/:id"
              element={
                <PrivateRoute>
                  <ViewAssessment />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </ThemeProvider>
  )
}

export default App
