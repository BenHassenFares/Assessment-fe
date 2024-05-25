const API_URL = 'http://localhost:8081/api/Profile'

export const getProfile = async () => {
  try {
    const response = await fetch(`${API_URL}/list-profile"`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProfileById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/get-profile/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addProfile = async (profile) => {
  try {
    const response = await fetch(`${API_URL}/add-profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateProfile = async (id, profile) => {
  try {
    const response = await fetch(`${API_URL}/update-profile/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteProfile = async (id) => {
  try {
    const response = await fetch(`${API_URL}/delete-profile/${id}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
