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
  },
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
