import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    componentName: null,
    childrenProps: {},
    sizeModal: 'sm'
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        closeModal: (state, action) => {
            state.isOpen = false
            state.componentName = action.payload.name
            state.childrenProps = action.payload.childrenProps
        },
        openModal: (state, action) => {
            state.isOpen = true
            state.componentName = action.payload.name
            state.childrenProps = action.payload.childrenProps
            state.sizeModal = action.payload.sizeModal
        }
    }
});

export const { closeModal, openModal } = modalSlice.actions
export default modalSlice.reducer