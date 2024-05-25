const API_URL = 'http://localhost:8081/api/Recruiter'

export const getRecruiters = async () => {
  try {
    const response = await fetch(`${API_URL}/list-recruiters`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getRecruiterById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/get-recruiter/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
//might delete it since i won't be using it
export const addRecruiter = async (recruiter) => {
  try {
    const response = await fetch(`${API_URL}/add-recruiter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recruiter),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateRecruiter = async (id, recruiter) => {
  try {
    const response = await fetch(`${API_URL}/update-recruiter/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recruiter),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteRecruiter = async (id) => {
  try {
    const response = await fetch(`${API_URL}/remove-recruiter/${id}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const registerRecruiter = async (recruiter) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recruiter),
    })
    const data = await response.json()
    if (response.ok) {
      // Registration successful
      return { success: true, message: data.message }
    } else {
      // Registration failed
      return { success: false, message: data.message }
    }
  } catch (error) {
    console.log(error)
    return { success: false, message: 'User Registration Failed' }
  }
}
