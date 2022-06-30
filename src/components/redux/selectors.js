// export const todoListSelector = (state) => {
//   // check condition
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search)
//   })
//   return todosRemaining
// }

import { createSelector } from '@reduxjs/toolkit'

export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filters.search
export const filtersPrioritiesSeclector = (state) => state.filters.priorities
export const filtersStatusSelector = (state) => state.filters.status

// reselect

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filtersStatusSelector,
  searchTextSelector,
  filtersPrioritiesSeclector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText)
      }
      // else if (status === 'Completed') {
      //   return todo.name.includes(searchText) && todo.completed
      // } else {
      //   return todo.name.includes(searchText) && !todo.completed
      // }

      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      )
    })
  }
  // return todoList.filter((todo) => {
  // if (status === 'All') {
  //     return todo.name.includes(searchText)
  // }
  // return todoList.filter((todo) => {
  //   {status === 'completed' ? }
  //   return todo.name.includes(searchText)
  // })
)
