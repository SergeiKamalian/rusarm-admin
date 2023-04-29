import { ICity } from "@/interfaces"

export function useCity() {

    const cities_am: ICity[] = [
        { id: 0, title: 'yerevan' },
        { id: 1, title: 'ijevan' },
        { id: 2, title: 'dilijan' },
        { id: 3, title: 'sevan' },
        { id: 4, title: 'abovyan' },
        { id: 5, title: 'gyumri' },
    ]

    const cities_ru: ICity[] = [
        { id: 0, title: 'vladikavkaz' },
        { id: 1, title: 'miniralnie_vodi' },
        { id: 2, title: 'rostov' },
        { id: 3, title: 'voronej' },
        { id: 4, title: 'belgorod' },
        { id: 5, title: 'alekseevka' },
        { id: 6, title: 'valuyki' },
        { id: 7, title: 'kursk' },
        { id: 8, title: 'stary_oskol' },
    ]

    return {
        cities_am,
        cities_ru
    }
}