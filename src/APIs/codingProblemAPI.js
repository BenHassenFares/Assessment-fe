const API_URL = 'http://localhost:8081/api/Coding-Problem'

export const getCodingProblems = async () => {
  try {
    const response = await fetch(`${API_URL}/all`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCodingProblemById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/get-codingproblem/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addCodingProblem = async (codingProblem) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(codingProblem),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateCodingProblem = async (id, codingProblem) => {
  try {
    const response = await fetch(`${API_URL}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(codingProblem),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteCodingProblem = async (id) => {
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
