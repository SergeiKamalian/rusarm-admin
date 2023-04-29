import { ICurrency, ILanguage, IRoute, LOCAL_LANGUAGES } from "@/interfaces";
import { REDUCER_TYPES } from "../types";

interface IReducerInitialState {
    language: ILanguage | null,
    currency: ICurrency | null,
    routes: IRoute[],
    formIsOtp: boolean
}
const INITIAL_STATE: IReducerInitialState = {
    language: null,
    currency: null,
    routes: [],
    formIsOtp: false
};

const reducer = (state = INITIAL_STATE, action: { type: string; payload: ILanguage | IRoute[] | ICurrency | boolean }) => {
    switch (action.type) {
        case REDUCER_TYPES.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload as ILanguage,
            };
        case REDUCER_TYPES.SET_CURRENCY:
            return {
                ...state,
                currency: action.payload as ICurrency,
            };
        case REDUCER_TYPES.SET_ROUTES:
            return {
                ...state,
                routes: action.payload as IRoute[],
            };
        case REDUCER_TYPES.SET_FORM_IS_OTP:
            return {
                ...state,
                formIsOtp: action.payload as boolean,
            };
        default:
            return state;
    }
};
export default reducer;