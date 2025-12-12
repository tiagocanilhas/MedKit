import * as React from 'react'
import SVG from 'react-inlinesvg'

import styles from './styles.module.css'

type MedKitProps = {
  onClick: () => void
  isExiting: boolean
}

export function MedKit({ onClick, isExiting }: MedKitProps) {
  return (
    <div className={`${styles.container} ${isExiting ? 'u-expandOut' : 'u-zoomIn'}`}>
      <SVG src="/images/MedKit.svg" className={styles.image} onClick={onClick} />
    </div>
  )
}
