import { FC, useState } from 'react'
import { StyledButtons, StyledLink, StyledRouteItem, StyledValue, StyledValues } from '../styles'
import Link from 'next/link'
import Button from '@/ui/Button/Button'
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri'
import { IRoute } from '@/interfaces'
import { useRoute } from '@/hooks/useRoute'
import Modal from '@/ui/Modal/Modal'
import DeleteModalContent from '@/components/DeleteModalContent/DeleteModalContent'
import CreateAndEditRoute from '@/components/CreateAndEditRoute/CreateAndEditRoute'
interface RouteItemProps {
    route: IRoute
    backgroundIsLight: boolean
}
const RouteItem: FC<RouteItemProps> = ({ route, backgroundIsLight }) => {
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)
    return (
        <>
            {
                deleteModalIsOpen
                    ? <Modal
                        title='Удалить маршрут'
                        isOpen={deleteModalIsOpen}
                        closeHandler={() => setDeleteModalIsOpen(false)}
                        body={<DeleteModalContent route={route} closeHandler={() => setDeleteModalIsOpen(false)} />}
                    /> : null
            }
            {
                updateModalIsOpen
                    ? <Modal
                        title='Изменить маршрут'
                        isOpen={updateModalIsOpen}
                        closeHandler={() => setUpdateModalIsOpen(false)}
                        body={<CreateAndEditRoute route={route} closeHandler={() => setUpdateModalIsOpen(false)} />}
                    /> : null
            }

            <StyledRouteItem backgroundIsLight={backgroundIsLight}>
                <StyledValues>
                    <StyledValue customWidth={130}>{route.city_from}</StyledValue>
                    <StyledValue customWidth={130}>{route.city_to}</StyledValue>
                    <StyledValue customWidth={130}>{route.name}</StyledValue>
                    <StyledValue customWidth={130}>
                        <StyledLink href={route.image}>Ссылка</StyledLink>
                    </StyledValue>
                    <StyledValue customWidth={130}>{route.price_amd}</StyledValue>
                    <StyledValue customWidth={130}>{route.price_rub}</StyledValue>
                </StyledValues>
                <StyledButtons>
                    <Button
                        label={<RiEdit2Line color='white' />}
                        onClick={() => setUpdateModalIsOpen(true)}
                        type='edit'
                        theme='primary'
                    />
                    <Button
                        label={<RiDeleteBinLine color='white' />}
                        onClick={() => setDeleteModalIsOpen(true)}
                        type='delete'
                        theme='primary'
                    />
                </StyledButtons>
            </StyledRouteItem>
        </>
    )
}

export default RouteItem