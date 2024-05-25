export const sortData = (data, sortingOption) => {
  let sortedData = [...data]

  if (sortingOption === 'default') {
    // No sorting
  } else if (sortingOption === 'theme') {
    sortedData.sort((a, b) => a.theme.localeCompare(b.theme))
  } else if (sortingOption === 'date') {
    sortedData.sort(
      (a, b) => new Date(a.dateCreation) - new Date(b.dateCreation),
    )
  } else if (sortingOption === 'title') {
    sortedData.sort((a, b) => a.title.localeCompare(b.title))
  }

  return sortedData
}
