import React, { useEffect, useState } from 'react'
import { StyledAuth, StyledAuthTitle, StyledAuthWrapper, StyledInputs } from './styles'
import FormItem from '../FormItem/FormItem'
import Input from '@/ui/Input/Input'
import Button from '@/ui/Button/Button'
import { useAuth } from '@/hooks/useAuth'

const AuthPage = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const { authAdmin } = useAuth()

    useEffect(() => {
        
    }, [])

    return (
        <StyledAuthWrapper>
            <StyledAuth>
                <StyledAuthTitle>Авторизация</StyledAuthTitle>
                <StyledInputs>
                    <FormItem
                        title='Логин'
                        body={<Input onChange={(e) => setLogin(e.target.value)} placeholder='Введите логин' />}
                    />
                    <FormItem
                        title='Пароль'
                        body={<Input onChange={(e) => setPassword(e.target.value)} placeholder='Введите пароль' inputType='password' />}
                    />
                </StyledInputs>
                <Button onClick={() => authAdmin(login, password)} theme='primary' label='Войти' />
            </StyledAuth>
        </StyledAuthWrapper>
    )
}

export default AuthPage