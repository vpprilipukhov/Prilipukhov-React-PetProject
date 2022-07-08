import React, {useRef} from 'react';
import styles from './burgerIngredients.module.css'
import BurgerIngSub from "./burgerIngSub";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {State} from "../../auxiliary/types/ingridientTypes";
import {useAppDispatch, useAppSelector} from "../../auxiliary/hooks/redux";
import {ingridientSlice} from "../../services/reducer/ingridientReducer";


interface Props {
    props?: React.ReactNode

}


const BurgerIngredients: React.FC<Props> = () => {

    const bunsRef = useRef<HTMLLIElement>(null);
    const saucesRef = useRef<HTMLLIElement>(null);
    const mainsRef = useRef<HTMLLIElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch()
    const {switchTab} = ingridientSlice.actions
    const currentTab = useAppSelector(state => state.ingridientReducer.currentTab)


    const selectGroup = (name: string) => {
        dispatch(switchTab(name));

        switch (name) {
            case "bun":


                bunsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                });
                break;
            case "sauce":
                saucesRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                });
                break;
            case "main":
                mainsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                });
                break;
        }
    };

    const handleScrollGroups = () => {
        const tabsBottom = tabsRef.current?.getBoundingClientRect().bottom;
        const bunsTop = bunsRef.current?.getBoundingClientRect().top;
        const saucesTop = saucesRef.current?.getBoundingClientRect().top;
        const mainsTop = mainsRef.current?.getBoundingClientRect().top;

        if (!tabsBottom || !bunsTop || !saucesTop || !mainsTop) {
            return;
        }

        const bunsDelta = Math.abs(bunsTop - tabsBottom);
        const saucesDelta = Math.abs(saucesTop - tabsBottom);
        const mainsDelta = Math.abs(mainsTop - tabsBottom);

        const min = Math.min(bunsDelta, saucesDelta, mainsDelta);

        const newTab =
            min === bunsDelta ? "bun" : min === saucesDelta ? "sauce" : "main";

        if (newTab !== currentTab) {
            dispatch(switchTab(newTab));
        }
    };


    const {ingridient} = useAppSelector(state => state.ingridientReducer)


    const ingridientMapBun = ingridient?.filter((e: State) => e.type === 'bun').map((e) => {
            return (
                <BurgerIngSub key={e._id} state={e}/>
            )
        }
    )


    const ingridientMapMain = ingridient?.filter((e: State) => e.type === 'main').map((e) => {
            return (
                <BurgerIngSub key={e._id} state={e}/>
            )
        }
    )


    const ingridientMapSauce = ingridient?.filter((e: State) => e.type === 'sauce').map((e) => {
            return (
                <BurgerIngSub key={e._id} state={e}/>
            )
        }
    )

    // @ts-ignore
    return (
        <div className={styles.burgerIngredients}>
            <div className={styles.header}> Соберите бургер</div>

            <div className={styles.miniMenu}>
                <div style={{display: 'flex'}} ref={tabsRef}>
                    <Tab value="bun" active={currentTab === 'bun'} onClick={selectGroup}>
                        Булки
                    </Tab>
                    <Tab value="sauce" active={currentTab === 'sauce'} onClick={selectGroup}>
                        Соусы
                    </Tab>
                    <Tab value="main" active={currentTab === 'main'} onClick={selectGroup}>
                        Начинки
                    </Tab>
                </div>
            </div>
            <div className={styles.blockComponent} onScroll={handleScrollGroups}>

                <li ref={bunsRef} className={styles.list}>
                    <div className={styles.textChoice}>
                        Булки
                    </div>
                    <div className={styles.componentMain}>
                        {ingridientMapBun}
                    </div>
                </li>
                <li ref={saucesRef} className={styles.list}>
                    <div className={styles.textChoice}>
                        Соусы
                    </div>
                    <div className={styles.componentMain}>

                        {ingridientMapSauce}

                    </div>
                </li>
                <li ref={mainsRef} className={styles.list}>
                    <div className={styles.textChoice}>
                        Начинки
                    </div>
                    <div className={styles.componentMain}>

                        {ingridientMapMain}

                    </div>

                </li>
            </div>


        </div>
    )

}

export default BurgerIngredients