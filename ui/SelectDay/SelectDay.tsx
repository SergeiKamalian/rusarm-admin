import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'
import { StyledDay, StyledDays } from './styles'
import { IDay } from '@/interfaces'
const days: IDay[] = [
    { id: 1, value: 'Пон', key: 'monday' },
    { id: 2, value: 'Вт', key: 'tuesday' },
    { id: 3, value: 'Ср', key: 'wednesday' },
    { id: 4, value: 'Чт', key: 'thursday' },
    { id: 5, value: 'Пт', key: 'friday' },
    { id: 6, value: 'Сб', key: 'saturday' },
    { id: 7, value: 'Вск', key: 'sunday' },
]
interface SelectDaysProps {
    setActiveDays: Dispatch<SetStateAction<IDay[]>>
    activeDays: IDay[]
}
const SelectDay: FC<SelectDaysProps> = ({ setActiveDays, activeDays }) => {
    const selectOrUnselectDay = useCallback((day: IDay) => {
        const dayIsActive = activeDays.some((activeDay) => activeDay.value === day.value);
        if (dayIsActive) {
            const filteredDays = activeDays.filter((activeDay) => activeDay.value !== day.value)
            setActiveDays(filteredDays)
        } else {
            setActiveDays([...activeDays, day])
        }
    }, [activeDays, setActiveDays])
    return (
        <StyledDays>
            {days.map((day) => <StyledDay
                key={day.id}
                active={activeDays.some((activeDay) => activeDay.value === day.value)}
                onClick={() => selectOrUnselectDay(day)}
            > {day.value} </StyledDay>)}
        </StyledDays>
    )
}

export default SelectDay