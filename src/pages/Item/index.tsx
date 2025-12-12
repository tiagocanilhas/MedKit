import * as React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Modal } from '../../components/Modal'

import { MedKitItem } from '../../types/MedKitItem'
import { MEDKIT_ITEMS } from '../../constants'

import styles from './styles.module.css'

export function Item() {
  const id = useParams().id
  const item: MedKitItem = MEDKIT_ITEMS.find(item => id == item.id.toString())

  return (
    <Modal
      content={
        <div className={styles.item}>
          <img src={item.imageUrl} alt={item.name} className={styles.image} />
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
