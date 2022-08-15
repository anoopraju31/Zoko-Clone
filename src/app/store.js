import { configureStore } from '@reduxjs/toolkit'
import chooseReducer from '../features/choose/choose'
import blogPageReducer from '../features/blogPage/blogPage'

export const store = configureStore({
  reducer: {
    choose: chooseReducer,
    blogPage: blogPageReducer
  },
})