import React from 'react'
import { Flex, Box } from 'reflexbox'
import { translate } from 'react-i18next'

import NavLink from './nav-link'
import InstagramLink from './instagram-link'
import { contentBreakdown, marginBreakdown } from '../../utils/layout'

import style from './nav-bar.module.css'

const NavBar = ({ t, i18n }) => {
  let anotherLang = i18n.language.indexOf('en') > -1 ? 'ru' : 'en'
  
  return (
    <Flex className={style.container}>
      <Box w={marginBreakdown} />
      <Box w={contentBreakdown} flex wrap justify='flex-start'>
        <NavLink to="/#collections" children={t('collectionTitle')} />
        <NavLink to="/#history" children={t('historyTitle')} />
        <NavLink to="/#exhibition" children={t('exhibitionTitle')} />
        <NavLink to="/#contact" children={t('contactTitle')} />
        <NavLink to="/memories" children={t('memoriesTitle')} />
        <NavLink to="#" children={t('langSwitch')} onClick={() => i18n.changeLanguage(anotherLang)} />
        <InstagramLink className={style.instagram} />
      </Box>
      <Box w={marginBreakdown} />
    </Flex>
  )
}

export default translate('main')(NavBar)
