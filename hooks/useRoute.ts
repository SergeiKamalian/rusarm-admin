import { useCallback } from "react"
import { useFirebase } from "./useFirebase"
import { IRoute } from "@/interfaces"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { setRoutes } from "@/redux/features/actions"
import notification from "@/utils/notification"
import checkAllPropertiesFilled from "@/utils/checkAllPropertiesFilled"

export function useRoute() {
    const { getData, addData, deleteData, updateData } = useFirebase()
    const { routes } = useSelector((store: RootState) => store.reducer)
    const dispatch = useDispatch()


    const changeRoutes = useCallback((routes: IRoute[]) => {
        dispatch(setRoutes(routes))
    }, [dispatch])

    const getRoutes = useCallback(async () => {
        const routes = await getData('routes') as IRoute[]
        changeRoutes(routes)
    }, [getData, changeRoutes])

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

    const deleteRoute = useCallback((routeId: string) => {
        deleteData('routes', routeId)
    }, [deleteData, getRoutes])

    const updateRoute = useCallback((routeId: string, updatedRoute: IRoute) => {
        updateData('routes', routeId, updatedRoute)
        getRoutes()
    }, [updateData, getRoutes])

    const createOrEditRoute = useCallback((route: IRoute, routeId?: string) => {
        const routeIsAvailable = routes.some((findRoute) => findRoute.id === route.id)
        if (routeIsAvailable) {
            routeId && updateRoute(routeId, route)
        } else {
            addData('routes', route)
        }
        getRoutes()
    }, [getRoutes, addData, routes])

    return {
        getRoutes,
        routes,
        getRouteByName,
        createOrEditRoute,
        deleteRoute,
        changeRoutes,
        updateRoute
    }
}