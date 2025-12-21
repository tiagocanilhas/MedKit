import * as React from 'react'

import styles from './styles.module.css'

type ContainerWithScrollBarProps = {
  className: string
  children: React.ReactNode
}

export function ContainerWithScrollBar({ className, children }: ContainerWithScrollBarProps) {
  return <div className={`${styles.customScroll} ${className}`}>{children}</div>
}
