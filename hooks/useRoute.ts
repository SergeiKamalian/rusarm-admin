import { useCallback } from "react"
import { useFirebase } from "./useFirebase"
import { IRoute } from "@/interfaces"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { setRoutes } from "@/redux/features/actions"

export function useRoute() {
    const { getData } = useFirebase()
    const { routes } = useSelector((store: RootState) => store.reducer)
    const dispatch = useDispatch()

    const getRoutes = useCallback(async () => {
        const routes = await getData('routes') as IRoute[]
        dispatch(setRoutes(routes))
    }, [getData])

    const getRouteByName = useCallback((name: string) => {
        if (routes.length) {
            const route = routes.find(route => route.name === name)
            if (route?.id) {
                return route
            } else {
                return route as IRoute
            }
        } else {
            getRoutes()
            return {} as IRoute
        }
    }, [routes])

    return {
        getRoutes,
        routes,
        getRouteByName
    }
}