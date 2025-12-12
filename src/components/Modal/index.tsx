import * as React from 'react'

import { ExitButton } from '../ExitButton'

import { useExit } from '../../hooks/useExit'

import styles from './styles.module.css'

type ModalProps = {
  content: React.ReactNode
  onClosePath: string
}

export function Modal({ content, onClosePath }: ModalProps) {
  const { isExiting, exit } = useExit()

  return (
    <div className={`${styles.overlay} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}>
      <div className={`${styles.container} ${isExiting ? 'u-zoomOut' : 'u-zoomIn'}`}>
        <ExitButton onClick={() => exit(onClosePath)} />
        {content}
      </div>
    </div>
  )
}
