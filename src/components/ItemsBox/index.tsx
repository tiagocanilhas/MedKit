import React from "react"

import { ContainerWithScrollBar } from "../ContainerWithScrollBar"
import { ItemCard } from "../ItemCard"

import styles from './styles.module.css'

type ItemsBoxProps = {
  title: string
  data: any[]
  color: string
  className?: string
}

export function ItemsBox({ title, data, color, className }: ItemsBoxProps) {
  return (
    <div className={`${styles.container} ${className}`} style={{ backgroundColor: color }}>
      <p>{title}</p>
      <ContainerWithScrollBar className={styles.content}>
        {data.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </ContainerWithScrollBar>
    </div>
  )
}
