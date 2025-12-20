import * as React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

import { Modal } from '../../components/Modal'
import { ContainerWithScrollBar } from '../../components/ContainerWithScrollBar'

import { MedKitItem } from '../../types/MedKitItem'

import styles from './styles.module.css'

export function Item() {
  const id = Number(useParams().id)
  const data = useOutletContext<MedKitItem[]>()
  const item = data?.find((i) => i.id === id)

  if (!item) {
    alert('Error loading item data.')
    return <></>
  }

  return (
    <Modal onClosePath="/items">
      <div className={styles.item}>

        <div className={styles.image}>
          <img src={item.imageUrl} alt={item.name} className={styles.image} />
          <h1 className={styles.name}>{item.name}</h1>
        </div>

        <div className={styles.details}>
          <ContainerWithScrollBar className={styles.whatIsIt}>
            <h2 className={styles.title}>O que é:</h2>
            <p className={styles.text}>{item.whatIsIt}</p>
          </ContainerWithScrollBar>
          <ContainerWithScrollBar className={styles.howToUse}>
            <h2 className={styles.title}>Como usar:</h2>
            <p className={styles.text}>{item.howToUse}</p>
          </ContainerWithScrollBar>
          <ContainerWithScrollBar className={styles.importantNotes}>
            <h2 className={styles.title}>Dicas Importantes:</h2>
            <p className={styles.text}>{item.importantNotes}</p>
          </ContainerWithScrollBar>
        </div>

      </div>
    </Modal>
  )
}
