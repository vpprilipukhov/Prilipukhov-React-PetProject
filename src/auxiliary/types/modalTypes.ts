

export enum modalActionsTypes {
    ON_MODAL = 'ON_MODAL',
    OFF_MODAL = 'OFF_MODAL'
}

export interface activeType {
    activeModal: boolean,
}



interface onModalAC{
    type: modalActionsTypes.ON_MODAL

}

interface offModal{
    type: modalActionsTypes.OFF_MODAL

}

export interface IChangeFilterAction {
    type: string
}

export type modalAC = onModalAC | offModal