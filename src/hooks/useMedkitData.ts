import { useEffect, useReducer } from 'react'
import { MedKitItem } from '../types/MedKitItem'

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

function formatRawData(data: any[]): MedKitItem[] {
  return data.map((item: any, index: number) => ({
    ...item,
    id: index + 1,
    imageUrl: item.imageUrl == '' ? '/images/no_image.jpg' : item.imageUrl,
  }));
}

export function useMedKitData() {
  const [state, dispatch] = useReducer(reducer, { tag: 'loading' })

  useEffect(() => {
    async function fetchData() {
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

    fetchData()
  }, [])

  return {
    isLoading: state.tag === 'loading',
    data: state.tag === 'loaded' ? state.data : undefined,
    error: state.tag === 'error' ? state.error : null,
  }
}
