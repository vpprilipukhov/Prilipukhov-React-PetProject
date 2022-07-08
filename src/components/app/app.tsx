import React, {FC} from 'react';
import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import ModalApp from "../modal/modalApp";
import {fetchIngredient} from "../../services/action/ingridientAction";
import styles from './app.module.css'
import {useAppDispatch} from "../../auxiliary/hooks/redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


const App: FC = () => {

    const dispatch = useAppDispatch()

    React.useEffect(
        () => {
            dispatch(fetchIngredient())
        }, [dispatch]
    )

    return (
        <div className={styles.page}>
            <ModalApp/>
            <div className={styles.app_wrapper}>
                <AppHeader/>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </DndProvider>

            </div>

        </div>
    );
}

export default App;
