import { setActiveCurrency, setActiveLanguage } from "@/redux/features/actions";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from 'react'
import { ICurrency, ILanguage, LOCAL_CURRENCIES, LOCAL_LANGUAGES } from "@/interfaces";
import { translates } from "@/translates";

export default function useLocal() {
    const { language, currency } = useSelector((store: RootState) => store.reducer)
    const dispatch = useDispatch()

    const languages: ILanguage[] = [
        { id: 0, title: 'Հայերեն', value: LOCAL_LANGUAGES.AM },
        { id: 1, title: 'Русский', value: LOCAL_LANGUAGES.RU },
    ]

    const currencies: ICurrency[] = [
        { id: 0, title: LOCAL_CURRENCIES.amd, value: LOCAL_CURRENCIES.amd },
        { id: 1, title: LOCAL_CURRENCIES.rub, value: LOCAL_CURRENCIES.rub }
    ]

    const switchActiveLanguage = useCallback(() => {
        language?.id === languages[0].id ? dispatch(setActiveLanguage(languages[1])) : dispatch(setActiveLanguage(languages[0]))
    }, [language, languages, dispatch, setActiveLanguage])

    const switchActiveCurrency = useCallback(() => {
        currency?.id === currencies[0].id ? dispatch(setActiveCurrency(currencies[1])) : dispatch(setActiveCurrency(currencies[0]))
    }, [currencies, currency, dispatch, setActiveCurrency])

    const changeActiveLanguageAndCurrencyOnRendering = useCallback(() => {
        dispatch(setActiveCurrency(currencies[1]))
        dispatch(setActiveLanguage(languages[1]))
    }, [])

    const t = useCallback((key: string) => {
        const label = translates.find((label) => label.key === key)
        if (label) {
            if (language?.value === LOCAL_LANGUAGES.AM) return label?.label_am
            else return label?.label_ru
        } else {
            return key
        }
    }, [language])

    return {
        language,
        languages,
        switchActiveLanguage,
        currencies,
        currency,
        switchActiveCurrency,
        changeActiveLanguageAndCurrencyOnRendering,
        // toggleBuyModalOpen,
        t
    };
}