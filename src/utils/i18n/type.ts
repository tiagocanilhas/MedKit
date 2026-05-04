import { Maintenance } from "../../pages/Maintenance"

const RAW_KEYS = {
  home: {
    title: '',
    description: '',
  },
  items: {},
  item: {
    whatIsIt: '',
    howToUse: '',
    importantNotes: '',
    quantity: '',
  },
  maintenance: {
    title: '',
    location: '',
    location_text: '',
    resposibility: '',
    responsibility_text: '',
    documentation: '',
    documentation_text: '',
    procedures: '',
    procedures_text: '',
    dontUse: '',
    item1: '',
    item2: '',
  },
  recommendations: {
    title: '',
    maintenance: '',
    maintenance_text: '',
    accessibility: '',
    accessibility_text: '',
    identification: '',
    identification_text: '',
    safety: '',
    safety_text: '',
  }
}

function createKeys<T>(obj: T, prefix = ''): T {
  const result: any = {}

  Object.keys(obj as Object).forEach(key => {
    const value = (obj as any)[key]
    const path = prefix ? `${prefix}.${key}` : key

    if (value && typeof value === 'object') result[key] = createKeys(value, path)
    else result[key] = path
  })

  return result
}

export const KEYS = createKeys(RAW_KEYS)

export type TranslationType = typeof KEYS
