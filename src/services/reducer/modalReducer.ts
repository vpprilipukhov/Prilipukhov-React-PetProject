import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {State} from "../../auxiliary/types/ingridientTypes";


export interface orderPostType {
    name: string
    order: {
        number: number
    }
    success: boolean
}

export interface modalType {
    activeModal: boolean
    activeModalName: string
    putIngridient: State | undefined
    order: orderPostType | undefined
    isLoading : boolean
    error: string
}



const initialState: modalType = {
    activeModal: false,
    activeModalName: '',
    putIngridient: undefined,
    order: undefined,
    isLoading: false,
    error: ''
}


export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        onModal(state){
            state.activeModal = true
        },

        offModal(state){
            state.activeModal = false
        },

        getOrder(state){
            state.activeModalName = 'order'
        },

        getIng(state){
            state.activeModalName = 'ing'
        },

        putIngridient(state,  action: PayloadAction<State>){
            state.putIngridient = action.payload
        }
        ,
        orderFetching(state) {
            state.isLoading = true;

        },
        orderFetchingSuccess(state, action: PayloadAction<orderPostType>) {
            state.isLoading = false;
            state.error = ''
            state.order = action.payload

        },
        orderFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },

    }

})


export default modalSlice.reducer