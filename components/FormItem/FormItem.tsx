import { FC, ReactNode } from 'react'
import { StyledFormItem, StyledFormTitle } from './styles'
interface FormItemProps {
    title: string
    body: ReactNode
}
const FormItem: FC<FormItemProps> = ({ title, body }) => {
    return (
        <StyledFormItem>
            <StyledFormTitle>{title}</StyledFormTitle>
            {body}
        </StyledFormItem>
    )
}

export default FormItem