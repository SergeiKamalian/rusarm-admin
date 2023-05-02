import { FC, useCallback } from "react"
import { StyledMenuItem, StyledMenuList } from "./styles"
import { IMenuListItem } from "@/interfaces"
import { useRouter } from "next/router"
import { TABS } from "@/enums"

interface MenuListProps {
    list: IMenuListItem[]
}
const MenuList: FC<MenuListProps> = ({
    list
}) => {
    const router = useRouter()
    const handleClick = useCallback((tab: TABS) => {
        router.push(
            {
                pathname: `/${tab}`,
                // query: { tab: tab },
            },
            undefined,
            {
                scroll: false,
                shallow: true,
            },
        );
    }, [router])

    return (
        <StyledMenuList>
            {list.map((item) => <StyledMenuItem active={router.asPath.substring(1) === item.tab} key={item.key} onClick={() => handleClick(item.tab)}>{item.icon} {item.title}</StyledMenuItem>)}
        </StyledMenuList>
    )
}

export default MenuList