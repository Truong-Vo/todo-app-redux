import { combineReducers } from 'redux'

import filtersReducer from '../Filters/filterSlice'
import todoReducer from '../TodoList/todoListSlice'

// function rootReducer(state = {}, action) {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoReducer(state.todoList, action),
//   }
// }

// sử dụng combineReducers cũng sẽ cho ra kết quả tương tự như trên

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoReducer,
})

export default rootReducer
