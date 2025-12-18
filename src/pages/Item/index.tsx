import * as React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

import { Modal } from '../../components/Modal'

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
    <Modal
      content={
        <div className={styles.item}>
          <img src={item.imageUrl} alt={item.name} className={styles.image} />
          <h1 className={styles.name}>{item.name}</h1>
          <div className={styles.whatIsIt}>
            <h2>O que é:</h2>
            <p>{item.whatIsIt}</p>
          </div>
          <div className={styles.howToUse}>
            <h2>Como usar:</h2>
            <p>{item.howToUse}</p>
          </div>
          <div className={styles.importantNotes}>
            <h2>Dicas Importantes:</h2>
            <p>{item.importantNotes}</p>
          </div>
        </div>
      }
      onClosePath="/items"
    />
  )
}
