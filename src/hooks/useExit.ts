import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ANIMATION_DURATION } from '../constants'

export function useExit() {
  const navigate = useNavigate()
  const [isExiting, setIsExiting] = useState(false)

  function exit(path: string) {
    if (isExiting) return

    setIsExiting(true)
    setTimeout(() => {
      navigate(path)
    }, ANIMATION_DURATION)
  }

  return { isExiting, exit }
}
