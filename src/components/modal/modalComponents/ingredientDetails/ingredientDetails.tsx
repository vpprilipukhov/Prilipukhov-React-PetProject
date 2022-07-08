import React from "react";
import styles from './ingredientDetails.module.css'
import {useAppSelector} from "../../../../auxiliary/hooks/redux";


interface Props {

}

const IngredientDetails: React.FC<Props> = () => {

    const ing = useAppSelector(state => state.modalReducer.putIngridient)

    return (

        <div className={styles.main}>

            <div className={styles.imgIng}>
                <img src={ing?.image_large}
                     alt={''}/>
            </div>
            <div className={styles.txtIng}>
                {ing?.name}
            </div>
            <div className={styles.detailsIng}>
                <div className={styles.detailsTextIng}>
                    <div className={styles.detailsTextIngDop}>Калории,ккал</div>
                    <div className={styles.detailsTextIngDop}>{ing?.calories}</div>
                </div>
                <div className={styles.detailsTextIng}>
                    <div className={styles.detailsTextIngDop}>Булки, г</div>
                    <div className={styles.detailsTextIngDop}>{ing?.proteins}</div>
                </div>
                <div className={styles.detailsTextIng}>
                    <div className={styles.detailsTextIngDop}>Жиры, г</div>
                    <div className={styles.detailsTextIngDop}>{ing?.fat}</div>
                </div>
                <div className={styles.detailsTextIng}>
                    <div className={styles.detailsTextIngDop}> Углеводы, г</div>
                    <div className={styles.detailsTextIngDop}>{ing?.carbohydrates}</div>
                </div>
            </div>

        </div>

    )
}


export default IngredientDetails