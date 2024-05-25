import keycloak from './../Keycloak'

const API_URL = 'http://localhost:8081/api/Assessment'

export const getAllAssessments = async () => {
  try {
    const response = await fetch(`${API_URL}/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${keycloak.token}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
export const getAssessmentByRecruiter = async () => {
  try {
    const response = await fetch(`${API_URL}/assessment`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${keycloak.token}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getAssessmentById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/get-assessment/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${keycloak.token}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createAssessment = async (assessment) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${keycloak.token}`,
      },
      body: JSON.stringify(assessment),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateAssessment = async (id, assessment) => {
  try {
    const response = await fetch(`${API_URL}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${keycloak.token}`,
      },
      body: JSON.stringify(assessment),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteAssessment = async (id) => {
  try {
    const response = await fetch(`${API_URL}/delete/${id}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const assessmentCountByMonth = async () => {
  try {
    const response = await fetch(`${API_URL}/assessment-counts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${keycloak.token}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const assessmentByRecruiterCountByMonth = async () => {
  try {
    const response = await fetch(`${API_URL}/countByMonth`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${keycloak.token}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const numberOfAssessments = async () => {
  try {
    const response = await fetch(`${API_URL}/numberOfAssessments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${keycloak.token}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const numberOfAssessmentsByRecruiter = async () => {
  try {
    const response = await fetch(`${API_URL}/count-assessment`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${keycloak.token}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const generatePDF = async (assessmentId) => {
  try {
    const response = await fetch(`${API_URL}/${assessmentId}/generate-pdf`, {
      method: 'GET',
      responseType: 'arraybuffer', // Set the expected response type
    })

    if (!response.ok) {
      throw new Error('Failed to generate PDF')
    }

    const data = await response.arrayBuffer()
    return new Blob([data], { type: 'application/pdf' })
  } catch (error) {
    console.log(error)
    return null
  }
}
