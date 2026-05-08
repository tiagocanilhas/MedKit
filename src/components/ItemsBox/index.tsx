import React from "react"

import { ContainerWithScrollBar } from "../ContainerWithScrollBar"
import { ItemCard } from "../ItemCard"

import { MedKitItem } from "../../types/MedKitItem"

import styles from './styles.module.css'

type ItemsBoxProps = {
  title: string
  data: MedKitItem[]
  color: string
  className?: string
}

export function ItemsBox({ title, data, color, className }: ItemsBoxProps) {
  return (
    <div className={`${styles.container} ${className}`} style={{ backgroundColor: color }}>
      <p>{title}</p>
      <ContainerWithScrollBar className={styles.content}>
        {data.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ContainerWithScrollBar>
      
      <footer>
        <p>(DGE, 2010)</p>
      </footer>
    </div>
  )
}
