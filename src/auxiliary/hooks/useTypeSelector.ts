import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../services/rootReducer";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector