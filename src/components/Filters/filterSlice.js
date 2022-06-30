// const initState = {
//   search: '',
//   status: 'All',
//   priorities: [],
// }

// function filtersReducer(state = initState, action) {
//   switch (action.type) {
//     case 'filters/filterTodo':
//       return {
//         ...state,
//         search: action.payload,
//       }
//     case 'filters/statusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       }

//     case 'filters/priorityFilterChange':
//       return {
//         ...state,
//         priorities: action.payload,
//       }
//     default:
//       return state
//   }
// }

// export default filtersReducer

import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: [],
  },
  reducers: {
    filterTodo: (state, action) => {
      state.search = action.payload
    },
    statusFilter: (state, action) => {
      state.status = action.payload
    },
    priorityFilterChange: (state, action) => {
      state.priorities = action.payload
    },
  },
})
