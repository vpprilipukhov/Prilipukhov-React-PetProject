import {activeType, IChangeFilterAction, modalActionsTypes} from "../types/modalTypes";


const activeModal: activeType = {
    activeModal: false
}


export const modalReducer = (state: activeType = activeModal, action: IChangeFilterAction): activeType => {
    switch (action.type) {
        case modalActionsTypes.ON_MODAL:

            return {
                activeModal: true
            }

        case modalActionsTypes.OFF_MODAL:
            return {
                activeModal: false
            }

        default:
            return state;


    }

}


