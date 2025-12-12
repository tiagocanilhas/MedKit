import * as React from 'react'

import { MedKit } from '../../components/MedKit'

import { useExit } from '../../hooks/useExit'

import styles from './styles.module.css'

export function Home() {
  const { isExiting, exit } = useExit()

  function handleClick() {
    exit('/items')
  }

  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}>Kit de Primeiros Socorros</h1>
      <MedKit onClick={handleClick} isExiting={isExiting} />
    </div>
  )
}
