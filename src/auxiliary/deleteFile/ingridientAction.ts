import {Dispatch} from "redux";
import axios from "axios";
import {ingredientAC, ingredientActionTypes} from "../types/ingridientTypes";



export const fetchIngredient = () => {
    return async (dispatch: Dispatch<ingredientAC>) => {
        try {
            dispatch({type: ingredientActionTypes.FETCH_INGREDIENT})
            const response = await axios.get('https://norma.nomoreparties.space/api/ingredients')
            setTimeout(() => {
                dispatch({type: ingredientActionTypes.FETCH_INGREDIENT_SUCCESS, payload: response.data.data})
            }, 100)
        } catch (e) {
            dispatch({
                type: ingredientActionTypes.FETCH_INGREDIENT_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

