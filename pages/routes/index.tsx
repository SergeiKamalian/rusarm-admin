import Routes from '@/components/Routes/Routes'
import { useRoute } from '@/hooks/useRoute'
import { useEffect } from 'react'

const index = () => {
    const { getRoutes } = useRoute()
    useEffect(() => {
        getRoutes()
    }, [getRoutes])
    return (
        <Routes />
    )
}

export default index