// import { legacy_createStore as createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducer'

// const composedEnhancers = composeWithDevTools()
// const store = createStore(rootReducer, composedEnhancers)

// export default store

// use redux toolkit

import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../Filters/filterSlice'
import todoListSlice from '../TodoList/todoListSlice'

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
})
export default store
