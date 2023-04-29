import { ICity } from '@/interfaces'
import { useCallback, useState } from 'react'
import { useCity } from './useCity'
import { useEffect } from 'react'
import phoneNumberIsValid from '@/utils/phoneNumberIsValid'
import { IValues } from '@/ui/Form/Form'
import { Store } from 'react-notifications-component';
import useLocal from './useLocal'
import notification from '@/utils/notification'
import { VALIDATION_ERRORS } from '@/enums'
import { useFirebase } from './useFirebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setFormIsOtp } from '@/redux/features/actions'

export function useForm() {
    const { cities_am, cities_ru } = useCity()
    const { auth } = useFirebase()
    const { formIsOtp } = useSelector((store: RootState) => store.reducer)

    const initialValues: IValues = {
        count: 1,
        fromCity: cities_am[0],
        toCity: cities_ru[0],
        phoneNumber: '+374 ',
        name_surname: ''
    }
    const { t } = useLocal()
    const [fromArmeniaToRussia, setFromArmeniaToRussia] = useState(true)
    const [values, setValues] = useState(initialValues)

    const setField = useCallback((key: keyof IValues, value: unknown) => {
        const newValues = { ...values, [key]: value };
        setValues(newValues);
    }, [values, setValues]);

    const changeRouteDirection = useCallback(() => {
        setFromArmeniaToRussia(prev => !prev)
    }, [fromArmeniaToRussia, values])

    const dispatch = useDispatch()

    const checkFormValid = useCallback((values: IValues, callback: () => void) => {
        const numberValid = phoneNumberIsValid(values.phoneNumber)
        const nameValid = Boolean(values.name_surname)
        if (nameValid) {
            if (numberValid) {
                // notification('okay', t('okay'), 'success')
                callback()
            } else {
                notification(t(VALIDATION_ERRORS.PHONE_NUMBER_NOT_VALID), t('error'), 'danger')
            }
        } else {
            notification(t(VALIDATION_ERRORS.NAME_NOT_VALID), t('error'), 'danger')
        }
    }, [t])

    const generateRecaptchaVerifer = useCallback(() => {
        //@ts-ignore
        window.recaptchaVerifer = new RecaptchaVerifier('recaptcha', {
            'size': 'invisible',
            'callback': () => {
                console.log('generated')
            }
        }, auth)
    }, [auth])

    const handleSendTicket = useCallback((values: IValues, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const sendTicket = () => {
            e.preventDefault()
            generateRecaptchaVerifer()
            //@ts-ignore
            const appVerifer = window.recaptchaVerifer
            signInWithPhoneNumber(auth, values.phoneNumber, appVerifer)
                .then((res) => {
                    console.log(res)
                    //@ts-ignore
                    window.confirmationResult = res
                    dispatch(setFormIsOtp(true))
                    notification('На ваш номер отправлен код!', 'Получилось!', 'success')
                    // verifyOTP()
                }).catch((error) => {
                    console.log(error)
                })
        }
        checkFormValid(values, sendTicket)
    }, [values])

    const verifyOTP = useCallback((OTP: string) => {
        if (OTP?.length === 6) {
            //@ts-ignore
            let confirmationResult = window.confirmationResult
            confirmationResult.confirm(OTP)
                .then(() => {
                    console.log('IS OKEY')
                    notification('Ваша заявка отправлена!', 'Получилось!', 'success')
                }).catch(() => {
                    notification('Неправильный код!', 'Ошибка!', 'danger')
                })
        }
    }, [])

    return {
        setField,
        fromArmeniaToRussia,
        values,
        changeRouteDirection,
        setValues,
        handleSendTicket,
        formIsOtp,
        verifyOTP
    }
}