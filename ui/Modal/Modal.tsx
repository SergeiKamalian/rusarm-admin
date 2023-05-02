import { FC, ReactNode } from 'react'
import { StyledCloseBtn, StyledModal, StyledModalBody, StyledModalHeader, StyledModalTitle, StyledModalWrapper } from './styles'
import { IoCloseSharp } from 'react-icons/io5'
interface ModalProps {
    isOpen: boolean
    closeHandler: () => void
    body: ReactNode
    title: string
}
const Modal: FC<ModalProps> = ({ isOpen, closeHandler, body, title }) => {
    return (
        <StyledModalWrapper hide={!isOpen}>
            <StyledModal>
                <StyledModalHeader>
                    <StyledModalTitle>{title}</StyledModalTitle>
                    <StyledCloseBtn onClick={closeHandler}><IoCloseSharp color='white' /></StyledCloseBtn>
                </StyledModalHeader>
                <StyledModalBody>{body}</StyledModalBody>
            </StyledModal>
        </StyledModalWrapper>
    )
}

export default Modal