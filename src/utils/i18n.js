export const edgesFilterLocale = (i18n) => ({ node }) => {
    let activeLang = i18n.language
    let localeToUse = ''

    if (activeLang === 'ru') {
        localeToUse = activeLang
    } else {
        localeToUse = 'en-US'
    }

    return node.node_locale === localeToUse
}