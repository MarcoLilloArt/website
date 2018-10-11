import React from 'react'
import { Flex, Box } from 'reflexbox'
import { translate } from 'react-i18next'

import NavLink from './nav-link'
import InstagramLink from './instagram-link'
import { contentBreakdown, marginBreakdown } from '../../utils/layout'

import style from './nav-bar.module.css'

const supportedLanguages = {
  'ru': 'русский',
  'en': 'english',
  'fr': 'français',
  'es': 'español',
}

const NavBar = ({ t, i18n }) => {
  return (
    <Flex className={style.container}>
      <Box w={marginBreakdown} />
      <Box w={contentBreakdown} flex wrap justify='flex-start'>
        <NavLink to="/#collections" children={t('collectionTitle')} />
        <NavLink to="/#history" children={t('historyTitle')} />
        <NavLink to="/#exhibition" children={t('exhibitionTitle')} />
        <NavLink to="/#contact" children={t('contactTitle')} />
        <NavLink to="/memories" children={t('memoriesTitle')} />
        <NavLink to="#"
          children={
            <span className={style.languageLink}>
              <img className={style.languageIcon} src={require('../../static/language.png')} /> {t('langSwitch')}
            </span>
          }
          onClick={lang => i18n.changeLanguage(lang)}
          submenu={
            Object.keys(supportedLanguages).reduce((allOtherLanguages, lang) => {
              if (lang !== i18n.language) {
                allOtherLanguages[lang] = supportedLanguages[lang]
              }
              return allOtherLanguages
            }, {})
          }
        />
        <InstagramLink className={style.instagram} />
      </Box>
      <Box w={marginBreakdown} />
    </Flex>
  )
}

export default translate('main')(NavBar)
