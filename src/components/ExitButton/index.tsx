import * as React from 'react'

import CloseButtonIcon from './CloseButton.svg'

import styles from './styles.module.css'

type ExitButtonType = {
  onClick: () => void
}

export function ExitButton({ onClick }: ExitButtonType) {
  return <CloseButtonIcon className={styles.button} onClick={onClick} width="100%" height="100%" />
}
