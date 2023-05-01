import React, { useState } from 'react'
import { StyledRouteList, StyledRoutes, StyledTitle, StyledTitles, StyledValues } from './styles'
import RouteItem from './components/RouteItem'
import Button from '@/ui/Button/Button'
import { HiOutlineDocumentAdd } from 'react-icons/hi'
import Modal from '@/ui/Modal/Modal'
import CreateAndEditRoute from '../CreateAndEditRoute/CreateAndEditRoute'

const Routes = () => {
    const [addModalIsOpen, setAddModalIsOpen] = useState(false)
    return (
        <>
            <Modal
                isOpen={addModalIsOpen}
                closeHandler={() => setAddModalIsOpen(false)}
                body={<CreateAndEditRoute closeHandler={() => setAddModalIsOpen(false)} />}
            />

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
                    {/* <RouteItem />
                <RouteItem /> */}
                    <RouteItem />
                </StyledRouteList>
            </StyledRoutes>
        </>
    )
}

export default Routes