import * as React from 'react'

import { ExitButton } from '../ExitButton'

import { useExit } from '../../hooks/useExit'

import styles from './styles.module.css'

type ModalProps = {
  children: React.ReactNode
  onClosePath: string
}

export function Modal({ children, onClosePath }: ModalProps) {
  const { isExiting, exit } = useExit()

  return (
    <div className={`${styles.overlay} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}>
      <div className={`${styles.container} ${isExiting ? 'u-zoomOut' : 'u-zoomIn'}`}>
        <div className={styles.exitButtonContainer}>
          <ExitButton onClick={() => exit(onClosePath)} />
        </div>
        {children}
      </div>
    </div>
  )
}
