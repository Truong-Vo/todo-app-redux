const initState = {
  search: '',
  status: 'All',
  priorities: [],
}

function filtersReducer(state = initState, action) {
  switch (action.type) {
    case 'filters/filterTodo':
      return {
        ...state,
        search: action.payload,
      }
    case 'filters/statusFilter':
      return {
        ...state,
        status: action.payload,
      }

    case 'filters/priorityFilterChange':
      return {
        ...state,
        priorities: action.payload,
      }
    default:
      return state
  }
}

export default filtersReducer
