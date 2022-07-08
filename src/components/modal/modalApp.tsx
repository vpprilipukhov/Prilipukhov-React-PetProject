import React from 'react';
import ModalOverlay from './modalOverlay/modalOverlay'
import ReactDOM from 'react-dom';
import Modal from "../modal/modal";
import IngredientDetails from "./modalComponents/ingredientDetails/ingredientDetails";
import OrderDetails from "./modalComponents/orderDetails/orderDetails";
import {useAppSelector} from "../../auxiliary/hooks/redux";


interface Props {
    props?: React.ReactNode
}

const ModalApp: React.FC<Props> = () => {

    const [activeIng, setActiveIng] = React.useState<boolean>(false)
    const [activeOrder, setActiveOrder] = React.useState<boolean>(false)

    const activeModalName = useAppSelector(state => state.modalReducer.activeModalName)

    const {activeModal} = useAppSelector(state => state.modalReducer)

    React.useEffect(
        () => {
            if (activeModalName === 'ing') {
                setActiveIng(true)

            }
            if (activeModalName === 'order') {
                setActiveOrder(true)

            }
        }, [activeModal, activeModalName]
    )

    React.useEffect(
        () => {
            if (!activeModal) {
                setActiveOrder(false)
                setActiveIng(false)
            }
        }, [activeModal]
    )


    return (

        <main>

            {activeModal &&
                ReactDOM.createPortal(
                    <div>
                        <ModalOverlay/>
                        {activeIng && <Modal title={'Детали ингредиента'}><IngredientDetails/></Modal>}
                        {activeOrder && <Modal title={''}><OrderDetails/></Modal>}
                    </div>,
                    document.getElementById('portal') as HTMLElement
                )}


        </main>

    )

}

export default ModalApp