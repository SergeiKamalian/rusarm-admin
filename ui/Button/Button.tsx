import { FC } from "react"
import { StyledButton } from "./styles"

interface ButtonProps {
    label: string
    theme: 'primary' | 'secondary'
    onClick: () => void
}
const Button: FC<ButtonProps> = ({ label, theme, onClick }) => {
    return (
        <StyledButton onClick={onClick} theme={theme}>{label}</StyledButton>
    )
}

export default Button