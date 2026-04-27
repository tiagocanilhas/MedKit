import * as React from 'react'

import MedKitIcon from './MedKit.svg'

import styles from './styles.module.css'

type HomeItemProps = {
  onClick: () => void
  isExiting: boolean
  icon: React.ElementType
}

export function HomeItem({ onClick, isExiting, icon: Icon }: HomeItemProps) {
  return (
    <div className={`${isExiting ? 'u-expandOut' : 'u-zoomIn'}`}>
      <Icon className={styles.image} onClick={onClick} width="100%" height="100%" />
    </div>
  )
}
