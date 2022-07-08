import {combineReducers} from "@reduxjs/toolkit"

import ingridientReducer from "./reducer/ingridientReducer";
import modalReducer from "./reducer/modalReducer";
import ingridientChoiceReducer from "./reducer/ingridientChoiceReducer";


export const rootReducer = combineReducers({

    ingridientChoiceReducer,
    ingridientReducer,
    modalReducer

})


export type RootState = ReturnType<typeof rootReducer>