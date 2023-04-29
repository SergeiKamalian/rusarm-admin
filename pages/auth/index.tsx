import AuthPage from '@/components/Auth/AuthPage'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Auth = () => {
    const router = useRouter()
    useEffect(() => {
        const isAuth = localStorage.getItem('isAuth');
        if (isAuth === 'true') router.push('/')
    }, [])
    return (
        <AuthPage />
    )
}

export default Auth