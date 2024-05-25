const API_URL = 'http://localhost:8081/api/Answers' // replace with your backend API URL

export const getAllAnswers = async () => {
  try {
    const response = await fetch(`${API_URL}/all`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getAnswerById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/get-answer/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createAnswer = async (answer) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answer),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateAnswer = async (id, answer) => {
  try {
    const response = await fetch(`${API_URL}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answer),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteAnswer = async (id) => {
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
