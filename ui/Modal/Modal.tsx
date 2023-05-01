import { FC, ReactNode } from 'react'
import { StyledCloseBtn, StyledModal, StyledModalBody, StyledModalHeader, StyledModalTitle, StyledModalWrapper } from './styles'
import { IoCloseSharp } from 'react-icons/io5'
interface ModalProps {
    isOpen: boolean
    closeHandler: () => void
    body: ReactNode
}
const Modal: FC<ModalProps> = ({ isOpen, closeHandler, body }) => {
    return (
        <StyledModalWrapper hide={!isOpen}>
            <StyledModal>
                <StyledModalHeader>
                    <StyledModalTitle>Создать маршрут</StyledModalTitle>
                    <StyledCloseBtn onClick={closeHandler}><IoCloseSharp color='white' /></StyledCloseBtn>
                </StyledModalHeader>
                <StyledModalBody>{body}</StyledModalBody>
            </StyledModal>
        </StyledModalWrapper>
    )
}

export default Modal