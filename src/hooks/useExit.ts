import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ANIMATION_DURATION } from '../constants'

export function useExit() {
  const navigate = useNavigate()
  const [exitingPath, setExitingPath] = useState<string | null>(null)

  function exit(path: string) {
    if (exitingPath) return

    setExitingPath(path)

    setTimeout(() => {
      navigate(path)
    }, ANIMATION_DURATION)
  }

  return { exitingPath, exit }
}
