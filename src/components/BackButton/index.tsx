import * as React from 'react'

import BackButtonIcon from './Arrow.svg';

import styles from './styles.module.css'

type ExitButtonType = {
  onClick: () => void
  isExiting: boolean
}

export function BackButton({ onClick, isExiting }: ExitButtonType) {
  return (
    <BackButtonIcon
      className={`${styles.button} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}
      onClick={onClick}
    />
  )
}
