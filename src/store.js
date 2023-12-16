import { configureStore } from '@reduxjs/toolkit'

import articleReducer from './features/articles/articlesSlice'
import loginReducer from './features/loginSlices'
import healthFacilityReducer from './features/healthFacilitiesSlice'
import doctorReducer from './features/doctorSlice'
import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

export default configureStore({
  reducer: {
    articles: articleReducer,
    login: loginReducer,
    healthFacilities: healthFacilityReducer,
    doctors: doctorReducer,
  }
}, applyMiddleware(thunk))
