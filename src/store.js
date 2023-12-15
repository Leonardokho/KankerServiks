import { configureStore } from '@reduxjs/toolkit'

import articleReducer from './features/articles/articlesSlices'
import loginReducer from './features/articles/loginSlices'
import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

export default configureStore({
  reducer: {
    articles: articleReducer,
    login: loginReducer
  }
}, applyMiddleware(thunk))
