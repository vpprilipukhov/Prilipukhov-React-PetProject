import axios from "axios";
import {AppDispatch} from "../setupStore";
import {modalSlice, orderPostType} from "../reducer/modalReducer";
import {ingridientSlice} from "../reducer/ingridientReducer";
import {State} from "../../auxiliary/types/ingridientTypes";


export const fetchIngredient = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(ingridientSlice.actions.ingridientFetching())
        const response = await axios.get<{ success: string, data: State[] }>('https://norma.nomoreparties.space/api/ingredients')

        if (response.data.success) {
            dispatch(ingridientSlice.actions.ingridientFetchingSuccess(response.data.data))
        } else {
            dispatch(ingridientSlice.actions.ingridientFetchingError("Unable"))
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            dispatch(ingridientSlice.actions.ingridientFetchingError(error.message))
        } else {
            dispatch(ingridientSlice.actions.ingridientFetchingError("An unexpected error occurred"))
        }

    }
}


export const addOrderId = (ingredients: Array<string>) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await axios.post<orderPostType>(
                "https://norma.nomoreparties.space/api/orders",
                JSON.stringify({
                    ingredients,
                }),
                {
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                }
            );

            if (res.data.success) {
                dispatch(modalSlice.actions.orderFetchingSuccess(res.data));
            } else {
                dispatch(
                    modalSlice.actions.orderFetchingError("Unable to create order")
                );
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                dispatch(modalSlice.actions.orderFetchingError(error.message));
            } else {
                dispatch(
                    modalSlice.actions.orderFetchingError("An unexpected error occurred")
                );
            }
        }
    };
}


// }
// const checkResponse = (res: any) => {
//     return res.ok ? res.json() : res.json().then((err: any) => Promise.reject(err));
// };
//
//
// export const addOrderId = (id: Array<string>) => {
//     return (dispatch: AppDispatch) => {
//         axios
//             .post(
//                 "https://norma.nomoreparties.space/api/orders",
//                 JSON.stringify({
//                     ingredients: id
//                 }),
//                 {
//                     headers: {
//                         "Content-Type": "application/json;charset=utf-8",
//                     },
//                 }
//             )
//             .then(checkResponse)
//             .then((response) => {
//                 dispatch(
//                     modalSlice.actions.orderFetchingSuccess(response.data)
//                 );
//             })
//             .catch((error) => {
//                 dispatch(modalSlice.actions.orderFetchingError(error.message));
//             });
//     };
// }


// export const fetchIngredient = createAsyncThunk(
//     'fetchIngredient',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get<apiIngridient>('https://norma.nomoreparties.space/api/ingredients')
//             return response.data.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue("Произошла ошибка при загрузке ингридиетов")
//         }
//     }
// )


// export const addOrderId = (idIngridient: { 'ingredients': Array<string> }) => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(modalSlice.actions.orderFetching())
//         console.log(idIngridient)
//         const response = await axios.post< {success: string, message: orderPostType}>('https://norma.nomoreparties.space/api/orders', JSON.stringify({
//             "ingredients": ["609646e4dc916e00276b286e","609646e4dc916e00276b2870"]
//         }) )
//
//         dispatch(modalSlice.actions.orderFetchingSuccess(response.data.message))
//     } catch (e) {
//         dispatch(modalSlice.actions.orderFetchingError(e.message))
//         console.log(e.message)
//     }
//
// }

// export const addOrderId = () => {
//     return (dispatch: AppDispatch) => {
//         axios.post('https://norma.nomoreparties.space/api/orders', {
//             "ingredients": ["60d3b41abdacab0026a733c6","609646e4dc916e00276b2870"]
//          }, {
//             headers: {
//                 "Content-Type": "application/json;charset=utf-8",
//                 // authorization: ''// тут токен,
//             },
//         })
//             .then(response => {
//                 dispatch(modalSlice.actions.orderFetchingSuccess(response.data.message))
//             })
//             .catch(error => {
//                 dispatch(modalSlice.actions.orderFetchingError(error.message))
//             });
//     }
// }


