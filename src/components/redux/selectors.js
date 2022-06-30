// export const todoListSelector = (state) => {
//   // check condition
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search)
//   })
//   return todosRemaining
// }

import { createSelector } from '@reduxjs/toolkit'

export const todoListSelector = (state) => state.todoList
export const filtersSelector = (state) => state.filters.search
export const filtersStatusSelector = (state) => state.filters.status

// reselect

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filtersSelector,
  (todoList, searchText, status) => {
    return todoList.filter((todo) => {
      return todo.name.includes(searchText)
    })
  }
)
