import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from '../../components/Layout'

import { useExit } from '../../hooks/useExit'

import styles from './styles.module.css'

export function Maintenance() {
  const { exitingPath, exit } = useExit()
  const isExiting = !!exitingPath

  function handleExit() {
    exit('/')
  }

  return (
    <>
      <Layout onBack={handleExit} isExiting={isExiting}>
        <p>Something</p>
      </Layout>
      <Outlet />
    </>
  )
}
