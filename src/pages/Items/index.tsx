import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { ItemCard } from '../../components/ItemCard'
import { Loading } from '../../components/Loading'
import { BackButton } from '../../components/BackButton'
import { ContainerWithScrollBar } from '../../components/ContainerWithScrollBar'

import { useExit } from '../../hooks/useExit'
import { useMedKitData } from '../../hooks/useMedkitData'

import styles from './styles.module.css'

export function Items() {
  const { isExiting, exit } = useExit()
  const { isLoading, data, error } = useMedKitData()

  function handleExit() {
    exit('/')
  }

  if (isLoading) {
    return <Loading />
  }

  if (error || !data) {
    alert('Error loading data: ' + error)
    return <></>
  }

  return (
    <>
      <div className={styles.backButtonContainer}>
        <BackButton onClick={handleExit} isExiting={isExiting} />
      </div>
      <ContainerWithScrollBar className={`${styles.box} ${isExiting ? 'u-zoomOut' : 'u-zoomIn'}`}>
        {data.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </ContainerWithScrollBar>
      <Outlet context={data} />
    </>
  )
}
