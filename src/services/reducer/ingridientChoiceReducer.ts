import {State, StateChoice} from "../../auxiliary/types/ingridientTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";


interface ingridientChoiceState {
    ingridientChoice: StateChoice[]
    coast: number
    order: number
    bun: StateChoice | undefined
}

const initialState: ingridientChoiceState = {
    ingridientChoice: [],
    coast: 0,
    order: 0,
    bun: undefined

}


export const ingridientChoiceSlice = createSlice({
    name: 'ingridientChoice',
    initialState,
    reducers: {

        increment(state) {
            state.order += 1
        },

        decrement(state) {
            state.order -= 1
        },
        coasts(state) {
            state.coast = state.ingridientChoice.reduce((sum, e) => sum + e.price, 0)
        },

        appendIng(state, action: PayloadAction<State>) {

            if (action.payload.type !== 'bun') {
                const newState: StateChoice = {...action.payload, 'newId': uuid()}
                state.ingridientChoice.push(newState)
                state.coast += action.payload.price

            } else if (action.payload.type === 'bun' && state.bun === undefined) {
                const newState: StateChoice = {...action.payload, 'newId': uuid()}
                state.bun = newState
                state.coast += (action.payload.price) * 2

            } else {

                const index: number | undefined = state.ingridientChoice.findIndex((item) => state.bun?._id === item._id);


                if (state.bun?._id !== action.payload._id) {

                    const newState: StateChoice = {...action.payload, 'newId': uuid()}

                    state.coast += (action.payload.price) * 2
                    // @ts-ignore
                    state.coast -= (state.bun.price) * 2

                    state.bun = newState
                    state.ingridientChoice[index] = newState

                } else {
                    alert('У вас уже есть такая булочка, возьмите другую))')
                }


            }


        },

        moveChoice(state, action: PayloadAction<{ dragIndex: number, hoverIndex: number }>) {
            const ingridientChoice = [...state.ingridientChoice]
            ingridientChoice.splice(
                action.payload.hoverIndex,
                0,
                ingridientChoice.splice(action.payload.dragIndex, 1)[0]
            );
            state.ingridientChoice = ingridientChoice

        },


        dell(state, action: PayloadAction<string>) {

            const index: number = state.ingridientChoice.findIndex((item) => action.payload === item._id);
            state.coast -= state.ingridientChoice[index].price
            state.ingridientChoice.splice(index, 1)


        }

    }
})

export default ingridientChoiceSlice.reducer