import * as React from 'react'
import SVG from 'react-inlinesvg'

import styles from './styles.module.css'

type ExitButtonType = {
  onClick: () => void
  isExiting: boolean
}

export function BackButton({ onClick, isExiting }: ExitButtonType) {
  return (
    <SVG
      src="/images/Arrow.svg"
      className={`${styles.backButton} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}
      onClick={onClick}
    />
  )
}
