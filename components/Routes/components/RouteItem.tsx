import React from 'react'
import { StyledButtons, StyledLink, StyledRouteItem, StyledValue, StyledValues } from '../styles'
import Link from 'next/link'
import Button from '@/ui/Button/Button'
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri'
const RouteItem = () => {
    return (
        <StyledRouteItem>
            <StyledValues>
                <StyledValue customWidth={130}>Владикавказ</StyledValue>
                <StyledValue customWidth={130}>Ереван</StyledValue>
                <StyledValue customWidth={130}>vladikavkaz-yerevan-avtobus</StyledValue>
                <StyledValue customWidth={130}>
                    <StyledLink href='link'>Ссылка</StyledLink>
                </StyledValue>
                <StyledValue customWidth={130}>25000</StyledValue>
                <StyledValue customWidth={130}>5000</StyledValue>
            </StyledValues>
            <StyledButtons>
                <Button
                    label={<RiDeleteBinLine color='white' />}
                    onClick={() => console.log('click')}
                    type='delete'
                    theme='primary'
                />
                <Button
                    label={<RiEdit2Line color='white' />}
                    onClick={() => console.log('click')}
                    type='edit'
                    theme='primary'
                />
            </StyledButtons>
        </StyledRouteItem>
    )
}

export default RouteItem