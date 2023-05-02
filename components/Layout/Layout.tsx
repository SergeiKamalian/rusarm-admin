import MenuList from '../MenuList/MenuList'
import { StyledBody, StyledLayout, StyledLeftContent, StyledLogo, StyledRightConent } from './styles'
import { ReactNode } from 'react'
import { IMenuListItem } from '@/interfaces'
import { TABS } from '@/enums'
import { TbRoute } from 'react-icons/tb'
import { HiOutlineTranslate } from 'react-icons/hi'
import { RiContactsLine } from 'react-icons/ri'
import { MdOutlineDocumentScanner } from 'react-icons/md'
import Search from '@/ui/Search/Search'
const menuList: IMenuListItem[] = [
    { key: 0, tab: TABS.ROUTES, title: 'Маршруты', icon: <TbRoute /> },
    { key: 1, tab: TABS.LOCALS, title: 'Локалы', icon: <HiOutlineTranslate /> },
    { key: 2, tab: TABS.NUMBERS, title: 'Контакты', icon: <RiContactsLine /> },
    { key: 3, tab: TABS.META_DATAS, title: 'Мета-данные', icon: <MdOutlineDocumentScanner /> }
]

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <StyledLayout>
            <StyledLeftContent>
                <MenuList list={menuList} />
                <StyledLogo src={''} />
            </StyledLeftContent>

            <StyledRightConent>
                <Search />
                <StyledBody>
                    {children}
                </StyledBody>
            </StyledRightConent>
        </StyledLayout>
    )
}

export default Layout