import * as React from 'react'

import styles from './styles.module.css'

type ExitButtonType = {
  onClick: () => void
}

export function ExitButton({ onClick }: ExitButtonType) {
  return <img src="/images/CloseButton.svg" className={styles.button} onClick={onClick} />
}
