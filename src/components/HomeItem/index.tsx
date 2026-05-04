import * as React from 'react'

import styles from './styles.module.css'

type HomeItemProps = {
  onClick: () => void
  isExiting: boolean
  icon: React.ElementType | string
}

export function HomeItem({ onClick, isExiting, icon: Icon }: HomeItemProps) {
  return (
    <div className={isExiting ? 'u-expandOut' : 'u-zoomIn'}>
      {typeof Icon === 'string' ? (
        <img 
          src={Icon} 
          className={styles.image} 
          onClick={onClick} 
          alt="icon"
          width="100%" 
          height="100%" 
        />
      ) : (
        <Icon 
          className={styles.image} 
          onClick={onClick} 
          width="100%" 
          height="100%" 
        />
      )}
    </div>
  )
}
