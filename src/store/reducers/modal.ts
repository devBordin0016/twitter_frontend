import { createSlice } from '@reduxjs/toolkit'

type ModalState = {
  isOpenModal: boolean
}

const initialState: ModalState = {
  isOpenModal: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpenModal = true
    },
    close: (state) => {
      state.isOpenModal = false
    }
  }
})

export const { close, open } = modalSlice.actions
export default modalSlice.reducer
