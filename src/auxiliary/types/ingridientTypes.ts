export enum ingredientActionTypes {
    FETCH_INGREDIENT = 'FETCH_INGREDIENT',
    FETCH_INGREDIENT_SUCCESS = 'FETCH_INGREDIENT_SUCCESS',
    FETCH_INGREDIENT_ERROR = 'FETCH_INGREDIENT_ERROR',
}


export interface State {
    currentTarget: any
    _id: string
    name: string
    type: string
    proteins: number
    fat: number
    carbohydrates: number
    calories: number
    price: number
    image: string
    image_mobile: string
    image_large: string
    __v: number


}

export interface StateChoice {
    currentTarget: any
    _id: string
    name: string
    type: string
    proteins: number
    fat: number
    carbohydrates: number
    calories: number
    price: number
    image: string
    image_mobile: string
    image_large: string
    __v: number
    newId: string

}

export interface ingredientState {
    ingredient: Array<State>
    loading: boolean,
    error: any
}


interface fetchIngredientAC {
    type: ingredientActionTypes.FETCH_INGREDIENT;

}
interface fetchIngredientSuccessAC {
    type: ingredientActionTypes.FETCH_INGREDIENT_SUCCESS;
    payload: any[]
}
interface fetchIngredientErrorAC {
    type: ingredientActionTypes.FETCH_INGREDIENT_ERROR;
    payload: string;
}
export type ingredientAC = fetchIngredientAC | fetchIngredientSuccessAC | fetchIngredientErrorAC

