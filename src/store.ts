import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './slice/ModalSlice'
import analysisSlice from './slice/analysisSlice'
import userSlice from './slice/userSlice'
export const store = configureStore({
  reducer: {
    modal: modalSlice,
    analysis: analysisSlice,
    user: userSlice,
  },
})