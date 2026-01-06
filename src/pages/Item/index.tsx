import * as React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

import { Modal } from '../../components/Modal'
import { ContainerWithScrollBar } from '../../components/ContainerWithScrollBar'

import { useText } from '../../hooks/useText'

import { MedKitItem } from '../../types/MedKitItem'

import styles from './styles.module.css'

export function Item() {
  const { t, keys } = useText()
  const id = Number(useParams().id)
  const data = useOutletContext<MedKitItem[]>()
  const item = data?.find(i => i.id === id)

  if (!item) {
    alert('Error loading item data.')
    return <></>
  }

  return (
    <Modal onClosePath="/items">
      <ContainerWithScrollBar className={styles.item}>
        <div className={styles.imageContainer}>
          <img src={item.imageUrl} alt={item.name} className={styles.image} />
          <h1 className={styles.name}>{item.name}</h1>
        </div>
        <div className={styles.details}>
          <Details className={styles.whatIsIt} title={t(keys.item.whatIsIt)} text={item.whatIsIt} />
          <Details className={styles.howToUse} title={t(keys.item.howToUse)} text={item.howToUse} />
          <Details className={styles.importantNotes} title={t(keys.item.importantNotes)} text={item.importantNotes} />
        </div>
      </ContainerWithScrollBar>
    </Modal>
  )
}

type DetailsProps = {
  className?: string
  title: string
  text: string
}

function Details({ className, title, text }: DetailsProps) {
  return <ContainerWithScrollBar className={className}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{text}</p>
  </ContainerWithScrollBar>
}