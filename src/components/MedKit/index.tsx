import * as React from 'react'

import MedKitIcon from './MedKit.svg'

import styles from './styles.module.css'

type MedKitProps = {
  onClick: () => void
  isExiting: boolean
}

export function MedKit({ onClick, isExiting }: MedKitProps) {
  return (
    <div className={`${isExiting ? 'u-expandOut' : 'u-zoomIn'}`}>
      <MedKitIcon className={styles.image} onClick={onClick} width="100%" height="100%" />
    </div>
  )
}
