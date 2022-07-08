import {ingredientAC, ingredientActionTypes, ingredientState} from "../types/ingridientTypes";


const initialState: ingredientState = {
    ingredient: [],
    loading: false,
    error: null
}


export const ingredientReducer = (state = initialState, action: ingredientAC): ingredientState => {

    switch (action.type) {
        case ingredientActionTypes.FETCH_INGREDIENT:

            return {loading: true, error: null, ingredient: []}
        case ingredientActionTypes.FETCH_INGREDIENT_SUCCESS:

            return {loading: false, error: null, ingredient: action.payload}
        case ingredientActionTypes.FETCH_INGREDIENT_ERROR:

            return {loading: false, error: action.payload, ingredient: []}
        default:

            return state
    }
}
