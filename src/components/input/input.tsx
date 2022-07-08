import React from "react";
import styles from './input.module.css'

interface Props {
    props?: React.ReactNode


}


const Input: React.FC<Props> = () => {

    return (
        <div className={styles.back}>
            <div className={styles.mainIn}>
                <div className={styles.textV}> Вход</div>
                <div className={styles.eml}>
                    <div className={styles.emlTxt}>E-mail</div>
                </div>
                <div className={styles.eml}>
                    <div className={styles.emlTxt}>Пароль</div>
                </div>
                <div className={styles.butt}> Войти</div>
                <div className={styles.txt}> Вы - новый пользователь? Зарегестрироваться</div>
                <div className={styles.txt2}> Забыли пароль? Востановить пароль</div>
            </div>
        </div>
    )
}

export default Input