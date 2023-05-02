import { FC, useCallback } from 'react'
import { StyledDeleteModalConent, StyledFooter, StyledQuestion, StyledRouteName } from './styles'
import { IRoute } from '@/interfaces'
import { CgChevronDoubleRight } from 'react-icons/cg'
import Button from '@/ui/Button/Button'
import { useRoute } from '@/hooks/useRoute'
import notification from '@/utils/notification'
interface DeleteModalContentProps {
    route: IRoute
    closeHandler: () => void
}
const DeleteModalContent: FC<DeleteModalContentProps> = ({ route, closeHandler }) => {
    const { deleteRoute, routes, changeRoutes } = useRoute()
    const handleClick = useCallback(() => {
        if (route.id) {
            deleteRoute(route.id)
            closeHandler()
            notification('Маршрут удалён!', 'Успешно!', 'success')
            const filteredRoutes = routes.filter((filterRoute) => filterRoute.id !== route.id)
            changeRoutes(filteredRoutes)
        }
    }, [closeHandler, route, deleteRoute, routes, changeRoutes])
    return (
        <StyledDeleteModalConent>
            <StyledQuestion> Вы уверены, что хотите удалить маршрут?</StyledQuestion>
            <StyledRouteName>
                {route.city_from}
                <CgChevronDoubleRight color='white' />
                {route.city_to}
            </StyledRouteName>
            <StyledFooter>
                <Button
                    label='Удалить'
                    onClick={handleClick}
                    theme='primary'
                    size='small'
                />
            </StyledFooter>
        </StyledDeleteModalConent>
    )
}

export default DeleteModalContent