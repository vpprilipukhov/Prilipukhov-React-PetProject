import React, {useRef} from "react";
import styles from "./burgerConstructor.module.css";
import {CurrencyIcon, DeleteIcon, DragIcon, LockIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {StateChoice} from "../../auxiliary/types/ingridientTypes";
import {ingridientChoiceSlice} from "../../services/reducer/ingridientChoiceReducer";
import {useAppDispatch, useAppSelector} from "../../auxiliary/hooks/redux";
import {useDrag, useDrop} from "react-dnd";


interface Props {
    props?: React.ReactNode
    state: StateChoice
    index: number

    position?: string
}


export const BurgerConstructorSub: React.FC<Props> = ({position, state, index}) => {


    const {dell, moveChoice} = ingridientChoiceSlice.actions
    const dispatch = useAppDispatch()
    const ingredientData = useAppSelector(state => state.ingridientChoiceReducer.ingridientChoice)

    const ref = useRef(null)

    const [, drop] = useDrop({
        accept:["SORT_INGREDIENT"],
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover: (item, monitor) => {

            // @ts-ignore
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return;
            }
            // @ts-ignore
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            // @ts-ignore
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            dispatch(moveChoice({dragIndex, hoverIndex}))
            // @ts-ignore
            item.index = hoverIndex;
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: "SORT_INGREDIENT",

        item: () => {
            // @ts-ignore

            return { ingredientData, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    // просто вызов

    const dellItem = (e: { currentTarget: { id: string; }; }) => {
        dispatch(dell(e.currentTarget.id))

    }


    const isBun = state.type === 'bun'
    const style = !isBun ? styles.choiceComponentInner : position === 'top' ? styles.choiceComponentInnerTop : styles.choiceComponentInnerBot


    return (
        <div style={{opacity}}>
            {isBun &&
                <div key={state.newId} className={styles.choiceComponent}>
                    <div className={styles.dragIcon}/>
                    <div className={style}>
                        <div className={styles.choiceComponentImage}><img src={state.image} alt={''}
                                                                          className={styles.choiceComponentImageImage}/>
                        </div>
                        <div className={styles.choiceComponentText}>{state.name}</div>
                        <div className={styles.choiceComponentPrice}>{state.price} <CurrencyIcon type={'primary'}/>
                        </div>
                        <div className={styles.choiceLock}>
                            <LockIcon type={'secondary'}/>
                        </div>
                    </div>
                </div>
            }

            {!isBun &&
                // @ts-ignore
                <div ref={ref} key={state.newId} className={styles.choiceComponent}>
                    <div className={styles.dragIcon}><DragIcon type={'primary'}/></div>
                    <div className={style}>
                        <div className={styles.choiceComponentImage}><img src={state.image} alt={''}
                                                                          className={styles.choiceComponentImageImage}/>
                        </div>
                        <div className={styles.choiceComponentText}>{state.name}</div>
                        <div className={styles.choiceComponentPrice}>{state.price} <CurrencyIcon type={'primary'}/>
                        </div>
                        <button id={state._id} onClick={dellItem} className={styles.choiceComponentDell}>
                            <DeleteIcon type={'primary'}/>
                        </button>
                    </div>
                </div>
            }
        </div>
    )


}