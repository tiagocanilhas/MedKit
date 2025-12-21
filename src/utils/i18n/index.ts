import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptTranslations from './pt'
import enTranslations from './en'

const resources = {
  pt: { translation: ptTranslations },
  en: { translation: enTranslations },
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'pt',
  lng: 'pt',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
