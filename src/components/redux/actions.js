export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  }
}
export const filterTodo = (text) => {
  // console.log({ text })

  return {
    type: 'filters/filterTodo',
    payload: text,
  }
}

export const statusFilter = (status) => {
  return {
    type: 'filters/statusFilter',
    payload: status,
  }
}
