import useLocal from "@/hooks/useLocal"

const daysTogether = (days: string[]) => {
    const { t } = useLocal()
    const newDays = days?.map(day => t(day))
    return newDays?.join(', ')
}

export default daysTogether