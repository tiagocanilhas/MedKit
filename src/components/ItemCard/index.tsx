import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { MedKitItem } from '../../types/MedKitItem'

import styles from './styles.module.css'

type ItemCardProps = {
  item: MedKitItem
}

export function ItemCard({ item }: ItemCardProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/items/${item.id}`)
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <img src={item.imageUrl} alt={item.name} className={styles.image} />
      <h1 className={styles.title}>{item.name}</h1>
    </div>
  )
}
