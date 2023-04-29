import { FC } from 'react'
import { StyledInput } from './styles'
interface InputProps {
    inputType?: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input: FC<InputProps> = ({ inputType, placeholder, onChange }) => {
    return (
        <StyledInput onChange={onChange} placeholder={placeholder} type={inputType} />
    )
}

export default Input