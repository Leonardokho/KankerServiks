import { configureStore } from '@reduxjs/toolkit'

import articleReducer from './features/articles/articlesSlice'
import loginReducer from './features/loginSlices'
import healthFacilityReducer from './features/healthFacilitiesSlice'
import doctorReducer from './features/doctorSlice'
import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import consultationReducer from './features/consultationSlice'
import paymentReducer from './features/paymentSlice'
import modalReducer from './features/modalSlice'

export default configureStore({
  reducer: {
    articles: articleReducer,
    login: loginReducer,
    healthFacilities: healthFacilityReducer,
    doctors: doctorReducer,
    consultation: consultationReducer,
    payment: paymentReducer,
    modal: modalReducer
  }
}, applyMiddleware(thunk))
