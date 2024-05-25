const API_URL = 'http://localhost:8081/api/Questions' // replace with your backend API URL

export const getAllQuestions = async () => {
  try {
    const response = await fetch(`${API_URL}/list-questions`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getQuestionById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/get-questions/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createQuestion = async (question) => {
  try {
    const response = await fetch(`${API_URL}/add-questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateQuestion = async (id, question) => {
  try {
    const response = await fetch(`${API_URL}/update-questions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteQuestion = async (id) => {
  try {
    const response = await fetch(`${API_URL}/delete-questions/${id}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
