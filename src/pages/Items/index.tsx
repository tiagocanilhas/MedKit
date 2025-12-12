import * as React from 'react'
import { Outlet } from 'react-router-dom'
import SVG from 'react-inlinesvg'

import { ItemCard } from '../../components/ItemCard'
import { Loading } from '../../components/Loading'

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
      <SVG
        src="/images/Arrow.svg"
        className={`${styles.backButton} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}
        onClick={handleExit}
      />
      <div className={styles.container}>
        <div className={`${styles.box} ${isExiting ? 'u-zoomOut' : 'u-zoomIn'}`}>
          {data.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  )
}
