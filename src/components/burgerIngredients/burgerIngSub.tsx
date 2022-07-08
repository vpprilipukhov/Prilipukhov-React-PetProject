import React from 'react';
import {
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerIngrSub.module.css'
import {State} from "../../auxiliary/types/ingridientTypes";
import {useDrag} from "react-dnd";
import {useAppDispatch, useAppSelector} from "../../auxiliary/hooks/redux";
import {modalSlice} from "../../services/reducer/modalReducer";
import {ingridientChoiceSlice} from "../../services/reducer/ingridientChoiceReducer";


interface Props {
    props?: React.ReactNode
    state: State


}

const BurgerIngSub: React.FC<Props> = ({
                                           state,

                                       }) => {

    const ingridient = useAppSelector(state => state.ingridientReducer.ingridient)


    const {appendIng} = ingridientChoiceSlice.actions
    const {putIngridient, onModal, getIng} = modalSlice.actions
    const dispatch = useAppDispatch()

    const id = state._id
    const [, dragRef] = useDrag({
        type: "ing",
        item: {id},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })

    })


    const getId: React.ReactEventHandler = (e) => {

        for (let i = 0; i < ingridient.length; i++) {

            const idEl: string = e.currentTarget.id.split('|')[0]
            const type: string = e.currentTarget.id.split('|')[1]

            if (ingridient[i]._id === idEl) {
                const ing: State = ingridient[i]

                if (type === 'name') {
                    dispatch(appendIng(ing))
                    break
                } else {
                    dispatch(onModal())
                    dispatch(getIng())
                    dispatch(putIngridient(ing))
                    break

                }

            }
        }

    }


    //   !isDrag
    return (
        <div className={styles.componentMain}>
            <div key={state._id} className={styles.component}>
                <div className={styles.componentImage}>
                    <button onClick={getId} id={`${state._id}|picture`}
                            className={styles.currencyIconButton}><img ref={dragRef}
                                                                       src={state.image}
                                                                       alt={''}/>
                    </button>
                </div>

                <div className={styles.componentPrice}>{state.price} <CurrencyIcon type={'primary'}/></div>
                <button onClick={getId} id={`${state._id}|name`} itemID={'name'}
                        className={styles.componentText}>{state.name}</button>


            </div>
        </div>
    )
}


export default BurgerIngSub