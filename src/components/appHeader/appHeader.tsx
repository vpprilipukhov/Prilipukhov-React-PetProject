import React from 'react';
import styles from './appHeader.module.css'
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components'


const AppHeader: React.FC = () => {


    return (
        <header className={styles.appHeader}>
            <div className={styles.appHeaderSection1}>
                <div className={styles.appHeaderIcon}><BurgerIcon type={'primary'}/>Конструктор</div>
                <div className={styles.appHeaderIcon}><ListIcon type={'secondary'}/>Лента заказов</div>
            </div>
            <div className={styles.appHeaderSection2}>
                <div><Logo/></div>
            </div>
            <div className={styles.appHeaderSection3}>
                <div className={styles.appHeaderIcon}><ProfileIcon type={'secondary'}/> Личный кабинет</div>

            </div>
        </header>
    )

}

export default AppHeader