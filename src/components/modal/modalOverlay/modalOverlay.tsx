import React from "react";
import styles from './modalOverlay.module.css'
import {useAppDispatch} from "../../../auxiliary/hooks/redux";
import {modalSlice} from "../../../services/reducer/modalReducer";




interface Props {
    props?: React.ReactNode
}

const ModalOverlay: React.FC<Props> = () => {


    const {offModal} = modalSlice.actions
    const dispatch = useAppDispatch()


    const off = () => {
        dispatch(offModal())

    }

    return (
        <div className={styles.modal}
             onClick={off}>
        </div>
    )
}


export default ModalOverlay