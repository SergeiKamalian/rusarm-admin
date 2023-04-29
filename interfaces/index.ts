export interface ILanguage {
    id: number,
    value: LOCAL_LANGUAGES
    title: string
}
export interface ITranslate {
    key: string,
    label_am: string,
    label_ru: string
}
export enum LOCAL_LANGUAGES {
    AM = 'am',
    RU = 'ru'
}
export enum LOCAL_CURRENCIES {
    rub = 'rub',
    amd = 'amd'
}
export interface ICurrency {
    id: number
    value: LOCAL_CURRENCIES
    title: LOCAL_CURRENCIES
}
export interface ICity {
    title: string
    id: number
}
export interface IRoute {
    city_from: string
    city_to: string
    id: string
    duration: number
    price_amd: number
    price_rub: number
    search_keys: string
    image: string
    days: string[]
    name: string
    distance: number
}