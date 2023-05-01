import { FC, ReactNode } from "react"
import { StyledButton, StyledCircleButton } from "./styles"

interface ButtonProps {
    label: string | ReactNode
    theme: 'primary' | 'secondary'
    type?: 'delete' | 'edit' | 'add'
    size?: 'large' | 'medium' | 'small'
    onClick: () => void
}
const Button: FC<ButtonProps> = ({ label, theme, onClick, type, size = 'large' }) => {
    if (type) {
        return <StyledCircleButton theme={type} onClick={onClick}>{label}</StyledCircleButton>
    }
    return (
        <StyledButton size={size} onClick={onClick} theme={theme}>{label}</StyledButton>
    )
}

export default Button