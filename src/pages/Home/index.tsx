import * as React from 'react'

import { MedKit } from '../../components/MedKit'

import { useExit } from '../../hooks/useExit'
import { useText } from '../../hooks/useText'

import styles from './styles.module.css'

export function Home() {
  const { t, keys } = useText()
  const { isExiting, exit } = useExit()

  function handleClick() {
    exit('/items')
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={`${styles.title} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}>{t(keys.home.title)}</h1>
        <p className={`${styles.text} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}>{t(keys.home.description)}</p>
      </div>
      <div className={styles.medkitContainer}>
        <MedKit onClick={handleClick} isExiting={isExiting} />
      </div>
    </div>
  )
}
