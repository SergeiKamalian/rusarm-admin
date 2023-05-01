import React from 'react'
import { StyledHomePage, StyledLeftContent, StyledLogo, StyledRightConent } from './styles'
import MenuList from '../MenuList/MenuList'
import { IMenuListItem } from '@/interfaces'
import { TABS } from '@/enums'
import { TbRoute } from 'react-icons/tb'
import { HiOutlineTranslate } from 'react-icons/hi'
import { RiContactsLine } from 'react-icons/ri'
import Search from '@/ui/Search/Search'
import Routes from '../Routes/Routes'
const menuList: IMenuListItem[] = [
  { key: 0, tab: TABS.ROUTES, title: 'Маршруты', icon: <TbRoute /> },
  { key: 1, tab: TABS.LOCALS, title: 'Локалы', icon: <HiOutlineTranslate /> },
  { key: 2, tab: TABS.NUMBERS, title: 'Контакты', icon: <RiContactsLine /> }
]
const logoSrc = 'https://firebasestorage.googleapis.com/v0/b/rusarm-transits.appspot.com/o/logo_3.png?alt=media&token=0fc15e4a-4f49-4a6a-90a5-302bcdaaeb48'
const HomePage = () => {
  return (
    <StyledHomePage>

      <StyledLeftContent>
        <MenuList list={menuList} />
        <StyledLogo src={logoSrc} />
      </StyledLeftContent>

      <StyledRightConent>
        <Search />
        <Routes />
      </StyledRightConent>

    </StyledHomePage>
  )
}

export default HomePage