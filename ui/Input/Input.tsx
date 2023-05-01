import { FC } from 'react'
import { StyledInput } from './styles'
interface InputProps {
    inputType?: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
}
const Input: FC<InputProps> = ({ inputType, placeholder, value, onChange }) => {
    return (
        <StyledInput value={value} onChange={onChange} placeholder={placeholder} type={inputType} />
    )
}

export default Input