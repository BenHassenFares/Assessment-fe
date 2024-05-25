import keycloak from './../Keycloak'

const API_URL = 'http://localhost:8081/api/Assignment'

export const getAllAssignments = async () => {
  try {
    const response = await fetch(`${API_URL}/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${keycloak.token}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getAssignmentByRecruiter = async () => {
  try {
    const response = await fetch(`${API_URL}/assignment`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${keycloak.token}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getAssignmentById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/get-assignedassessment/${id}`, {
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

export const createAssignment = async (assignment) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(assignment),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
// we won't be using it in the future
// export const updateAssignment = async (id, assignedAssessment) => {
//   try {
//     const response = await fetch(`${API_URL}/update/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(assignedAssessment)
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// same goes for this
// export const deleteAssignedAssessment = async (id) => {
//   try {
//     const response = await fetch(`${API_URL}/delete/${id}`, {
//       method: 'DELETE',
//     })
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

export const candidateScore = async (assessmentId) => {
  try {
    const response = await fetch(`${API_URL}/candidate-score/${assessmentId}`, {
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

export const assignmentCountByMonth = async () => {
  try {
    const response = await fetch(`${API_URL}/assignment-counts`, {
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

export const assignmentByRecruiterCountByMonth = async () => {
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

export const numberOfCandidates = async () => {
  try {
    const response = await fetch(`${API_URL}/numberOfCandidates`, {
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

export const numberOfCandidatesByRecruiter = async () => {
  try {
    const response = await fetch(`${API_URL}/countCandidates`, {
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

export const numberOfAssignments = async () => {
  try {
    const response = await fetch(`${API_URL}/numberOfAssignments`, {
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

export const numberOfAssignmentsByRecruiter = async () => {
  try {
    const response = await fetch(`${API_URL}/count-assignment`, {
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
