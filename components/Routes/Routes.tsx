import React, { useState } from 'react'
import { StyledRouteList, StyledRoutes, StyledTitle, StyledTitles, StyledValues } from './styles'
import RouteItem from './components/RouteItem'
import Button from '@/ui/Button/Button'
import { HiOutlineDocumentAdd } from 'react-icons/hi'
import Modal from '@/ui/Modal/Modal'
import CreateAndEditRoute from '../CreateAndEditRoute/CreateAndEditRoute'
import { useRoute } from '@/hooks/useRoute'

const Routes = () => {
    const [addModalIsOpen, setAddModalIsOpen] = useState(false)
    const { routes } = useRoute()
    return (
        <>
            {
                addModalIsOpen
                    ? <Modal
                        title='Создать маршрут'
                        isOpen={addModalIsOpen}
                        closeHandler={() => setAddModalIsOpen(false)}
                        body={<CreateAndEditRoute closeHandler={() => setAddModalIsOpen(false)} />}
                    /> : null
            }

            <StyledRoutes>
                <StyledTitles>
                    <StyledValues>
                        <StyledTitle customWidth={130}>Откуда:</StyledTitle>
                        <StyledTitle customWidth={130}>Куда:</StyledTitle>
                        <StyledTitle customWidth={130}>Название:</StyledTitle>
                        <StyledTitle customWidth={130}>Изображение:</StyledTitle>
                        <StyledTitle customWidth={130}>Цена в драмах:</StyledTitle>
                        <StyledTitle customWidth={130}>Цена в рублях:</StyledTitle>
                    </StyledValues>
                    <Button
                        label={<HiOutlineDocumentAdd color='white' />}
                        onClick={() => setAddModalIsOpen(true)}
                        theme='primary'
                        type='add'
                    />
                </StyledTitles>
                <StyledRouteList>
                    {
                        routes.map((route, index) => <RouteItem key={route.name} backgroundIsLight={index % 2 === 0} route={route} />)
                    }
                </StyledRouteList>
            </StyledRoutes>
        </>
    )
}

export default Routes