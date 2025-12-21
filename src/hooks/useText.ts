import { useTranslation } from 'react-i18next'
import { KEYS } from '../utils/i18n/type'

export function useText() {
  const { t, i18n } = useTranslation()

  return {
    t,
    keys: KEYS,
    language: i18n.language,
    changeLanguage: i18n.changeLanguage,
  }
}
