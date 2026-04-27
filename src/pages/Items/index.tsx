import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { Loading } from '../../components/Loading'
import { Layout } from '../../components/Layout'
import { ContainerWithScrollBar } from '../../components/ContainerWithScrollBar'
import { ItemCard } from '../../components/ItemCard'

import { useExit } from '../../hooks/useExit'
import { useMedKitData } from '../../hooks/useMedkitData'

import styles from './styles.module.css'

export function Items() {
  const { exitingPath, exit } = useExit()
  const isExiting = !!exitingPath
  
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
      <Layout onBack={handleExit} isExiting={isExiting}>
        <ContainerWithScrollBar className={styles.box}>
          {data.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </ContainerWithScrollBar>
      </Layout>
      
      <Outlet context={data} />
    </>
  )
}
