import { ICurrency, ILanguage, IRoute } from "@/interfaces";
import { REDUCER_TYPES } from "./types";

export const setActiveLanguage = (language: ILanguage) => ({
    type: REDUCER_TYPES.SET_LANGUAGE,
    payload: language
})

export const setActiveCurrency = (currency: ICurrency) => ({
    type: REDUCER_TYPES.SET_CURRENCY,
    payload: currency
})
export const setRoutes = (routes: IRoute[]) => ({
    type: REDUCER_TYPES.SET_ROUTES,
    payload: routes
})
export const setFormIsOtp = (isOtp: boolean) => ({
    type: REDUCER_TYPES.SET_FORM_IS_OTP,
    payload: isOtp
})