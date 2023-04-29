import { useCallback } from "react"
import { useFirebase } from "./useFirebase"
import notification from "@/utils/notification"
import { useRouter } from "next/router"

export function useAuth() {

    const { getData } = useFirebase()

    const router = useRouter()

    const authAdmin = useCallback(async (login: string, password: string) => {
        const data = await getData('admin-auth')
        //@ts-ignore
        const adminLogin = data[0].login
        //@ts-ignore
        const adminPassword = data[0].password

        if (adminLogin === login && adminPassword === password) {
            localStorage.setItem('isAuth', 'true')
            notification('Вы вошли за администратора!', 'Успешно!', 'success')
            router.push('/')
        }else {
            notification('Логин или пароль неверный!', 'Ошибка!', 'danger')
        }
    }, [])


    return {
        authAdmin
    }
}