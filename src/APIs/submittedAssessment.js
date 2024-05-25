const API_URL = 'http://localhost:8081/api/Submitted-Assessment'

export const getSubmitted_Assessment = async () => {
  try {
    const response = await fetch(`${API_URL}/all`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getSubmitted_AssessmentById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/get-submittedassessment/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addSubmitted_Assessment = async (submitted_assessment) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitted_assessment),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateSubmitted_Assessment = async (id, submitted_assessment) => {
  try {
    const response = await fetch(`${API_URL}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitted_assessment),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteSubmitted_Assessment = async (id) => {
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
