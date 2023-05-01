import { IDay, IRoute } from '@/interfaces'
import { FC, useEffect, useState, useCallback } from 'react'
import { StyledCreateAndEditRoute, StyledRowBlock } from './styles'
import FormItem from '../FormItem/FormItem'
import Input from '@/ui/Input/Input'
import Button from '@/ui/Button/Button'
import SelectDay from '@/ui/SelectDay/SelectDay'
import ImageSelect from '@/ui/ImageSelect/ImageSelect'
import { useRoute } from '@/hooks/useRoute'
import checkAllPropertiesFilled from '@/utils/checkAllPropertiesFilled'
import notification from '@/utils/notification'
// import checkAllPropertiesFilled from '../../utils'
interface CreateAndEditRouteProps {
    route?: IRoute
    closeHandler: () => void
}

const CreateAndEditRoute: FC<CreateAndEditRouteProps> = ({ route, closeHandler }) => {
    const { routes, createOrEdidRoute } = useRoute()
    const initalValues: IRoute = {
        city_from: '',
        city_to: '',
        days: [],
        distance: '',
        duration: '',
        image: '',
        name: '',
        price_amd: '',
        price_rub: '',
        search_keys: ''
    }
    const [values, setValues] = useState<IRoute>(initalValues)
    const [activeDays, setActiveDays] = useState<IDay[]>([])
    const handleChangeValue = useCallback((key: string, value: string | string[]) => {
        setValues({
            ...values, [key]: value
        })
    }, [values])

    const handleClick = useCallback((values: IRoute) => {
        createOrEdidRoute(values)
        closeHandler()
    }, [routes, handleChangeValue, closeHandler])

    useEffect(() => {
        route?.name && setValues(route)
    }, [route])

    useEffect(() => {
        handleChangeValue('days', activeDays.map(({ key }) => key))
    }, [activeDays])
    return (
        <StyledCreateAndEditRoute>
            <StyledRowBlock>
                <FormItem
                    body={<Input
                        value={values.city_from}
                        placeholder='Иджеван'
                        onChange={(e) => handleChangeValue('city_from', e.target.value)}
                    />}
                    title='Откуда'
                />
                <FormItem
                    body={<Input
                        value={values.city_to}
                        onChange={(e) => handleChangeValue('city_to', e.target.value)}
                        placeholder='Азатамут'
                    />}
                    title='Куда'
                />
            </StyledRowBlock>
            <StyledRowBlock>
                <FormItem
                    body={<Input
                        value={values.price_rub}
                        onChange={(e) => handleChangeValue('price_rub', e.target.value)}
                        placeholder='5000'
                    />}
                    title='Цена в рублях'
                />
                <FormItem
                    body={<Input
                        onChange={(e) => handleChangeValue('price_amd', e.target.value)}
                        placeholder='25000'
                    />}
                    title='Цена в драмах'
                />
            </StyledRowBlock>
            <StyledRowBlock>
                <FormItem
                    body={<Input
                        value={values.distance}
                        onChange={(e) => handleChangeValue('distance', e.target.value)}
                        placeholder='453.3' />
                    }
                    title='Дистанция'
                />
                <FormItem
                    body={<Input
                        value={values.name}
                        onChange={(e) => handleChangeValue('name', e.target.value)}
                        placeholder='ijevan-azatamut-avtobus'
                    />}
                    title='Название'
                />
            </StyledRowBlock>
            <StyledRowBlock>
                <FormItem
                    body={<Input
                        value={values.duration}
                        onChange={(e) => handleChangeValue('duration', e.target.value)}
                        placeholder='35'
                    />}
                    title='Время в пути'
                />
                <FormItem
                    body={<SelectDay activeDays={activeDays} setActiveDays={setActiveDays} />}
                    title='Дни недели'
                />
            </StyledRowBlock>
            <FormItem
                body={<Input
                    value={values.search_keys}
                    onChange={(e) => handleChangeValue('search_keys', e.target.value)}
                    placeholder='владикавказ, vladikavkaz, վլադիկավկազ, երեվան, Երևան, erevan, yerevan, ереван'
                />}
                title='Ключи поиска'
            />
            <StyledRowBlock>
                <FormItem
                    body={<ImageSelect
                        onChange={(imageUrl: string) => handleChangeValue('image', imageUrl)}
                    />}
                    title='Изображение'
                />
                <Button label='Создать' size='medium' onClick={() => handleClick(values)} theme='primary' />
            </StyledRowBlock>
        </StyledCreateAndEditRoute>
    )
}

export default CreateAndEditRoute