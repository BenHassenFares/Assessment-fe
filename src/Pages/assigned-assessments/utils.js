export const sortData = (data, sortingOption) => {
  let sortedData = [...data]

  if (sortingOption === 'default') {
    // No sorting
  } else if (sortingOption === 'status') {
    sortedData.sort((a, b) => a.status.localeCompare(b.status))
  } else if (sortingOption === 'score') {
    sortedData.sort((a, b) => {
      const scoreA = parseFloat(a.submittedassessment?.totalscore)
      const scoreB = parseFloat(b.submittedassessment?.totalscore)
      if (isNaN(scoreA) && isNaN(scoreB)) {
        return 0
      } else if (isNaN(scoreA)) {
        return 1
      } else if (isNaN(scoreB)) {
        return -1
      } else {
        return scoreB - scoreA
      }
    })
  } else if (sortingOption === 'date') {
    sortedData.sort((a, b) => {
      const dateA = Date.parse(a.submittedassessment?.submittedDate)
      const dateB = Date.parse(b.submittedassessment?.submittedDate)
      if (isNaN(dateA) && isNaN(dateB)) return 0
      if (isNaN(dateA)) return 1
      if (isNaN(dateB)) return -1

      return dateB - dateA
    })
  }

  return sortedData
}
