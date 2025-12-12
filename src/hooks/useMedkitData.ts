import { useEffect, useReducer } from 'react'
import { MedKitItem } from '../types/MedKitItem'
import readXlsxFile from 'read-excel-file'

type State = { tag: 'loading' } | { tag: 'loaded'; data: MedKitItem[] } | { tag: 'error'; error: string }

type Action = { type: 'success'; data: MedKitItem[] } | { type: 'error'; error: string }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'success':
      return { tag: 'loaded', data: action.data }
    case 'error':
      return { tag: 'error', error: action.error }
    default:
      return state
  }
}

const EXCEL_SCHEMA = {
  'name': { prop: 'name', type: String },
  'imageUrl': { prop: 'imageUrl', type: String },
  'whatIsIt': { prop: 'whatIsIt', type: String },
  'howToUse': { prop: 'howToUse', type: String },
  'importantNotes': { prop: 'importantNotes', type: String },
};

function formatRawData(data: any[]): MedKitItem[] {
  return data.map((item: any, index: number) => ({
    id: index + 1,
    name: item.name || '',
    imageUrl: item.imageUrl == '' ? '/images/no_image.jpg' : item.imageUrl,
    whatIsIt: item.whatIsIt || '',
    howToUse: item.howToUse || '',
    importantNotes: item.importantNotes || ''
  }));
}

export function useMedKitData() {
  const [state, dispatch] = useReducer(reducer, { tag: 'loading' })

  useEffect(() => {
    async function fetchGoogle() {
      const sheetId = process.env.SPREADSHEET_ID;
      const sheetName = process.env.SHEET_NAME;
      const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;

      try {
        const res = await fetch(url)

        if (!res.ok) throw new Error('Error fetching data')

        const data = await res.json()
        const formattedData = formatRawData(data)
        dispatch({ type: 'success', data: formattedData })
      } catch (err) {
        dispatch({ type: 'error', error: (err as Error).message })
      }
    }

    async function fetchLocal() {
      const fileName = process.env.LOCAL_FILE;

      try {
        const res = await fetch(`/${fileName}`)

        if (!res.ok) throw new Error('File not found')
          
        const blob = await res.blob()
        const { rows } = await readXlsxFile(blob, { schema: EXCEL_SCHEMA as any });
        const formattedData = formatRawData(rows)

        dispatch({ type: 'success', data: formattedData })
      } catch (err) {
        dispatch({ type: 'error', error: (err as Error).message })
      }
    }

    switch (process.env.DATA_SOURCE) {
      case 'local':
        fetchLocal()
        break
      case 'google':
        fetchGoogle()
        break
      default:
        console.error('DATA_SOURCE environment variable is not set correctly.')
    }
    
  }, [])

  return {
    isLoading: state.tag === 'loading',
    data: state.tag === 'loaded' ? state.data : undefined,
    error: state.tag === 'error' ? state.error : null,
  }
}
