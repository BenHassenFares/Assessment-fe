const API_URL = 'http://localhost:8081/api/Options'

export const getOptions = async () => {
  try {
    const response = await fetch(`${API_URL}/all`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getOptionsById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/get-option/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addOptions = async (options) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateOptions = async (id, options) => {
  try {
    const response = await fetch(`${API_URL}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteOptions = async (id) => {
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
