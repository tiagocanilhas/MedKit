import * as React from 'react'

import { BackButton } from '../BackButton'

import styles from './styles.module.css'

type LayoutType = {
  onBack: () => void
  isExiting: boolean
  children: React.ReactNode
}

export function Layout({ onBack, isExiting, children}: LayoutType) {
  return <>
    <div className={styles.backButtonContainer}>
      <BackButton onClick={onBack} isExiting={isExiting} />
    </div>

    <div className={`${styles.content} ${isExiting ? 'u-zoomOut' : 'u-zoomIn'}`}>
      {children}
    </div>
  </>
}
