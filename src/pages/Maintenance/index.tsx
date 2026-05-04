import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from '../../components/Layout'

import { useText } from '../../hooks/useText'
import { useExit } from '../../hooks/useExit'

import styles from './styles.module.css'

export function Maintenance() {
  const { t, keys } = useText()
  const { exitingPath, exit } = useExit()
  const isExiting = !!exitingPath

  function handleExit() {
    exit('/')
  }

  return (
    <>
      <Layout onBack={handleExit} isExiting={isExiting}>
        <div className={styles.container}>
          <div className={styles.content}>
            
            <h2>{t(keys.maintenance.title)}:</h2>
            <ul>
              <li><strong>{t(keys.maintenance.location)}:</strong> {t(keys.maintenance.location_text)}</li>
              <li><strong>{t(keys.maintenance.resposibility)}:</strong> {t(keys.maintenance.responsibility_text)}</li>
              <li><strong>{t(keys.maintenance.documentation)}:</strong> {t(keys.maintenance.documentation_text)}</li>
              <li><strong>{t(keys.maintenance.procedures)}:</strong> {t(keys.maintenance.procedures_text)}</li>
            </ul>

            <h3>{t(keys.maintenance.dontUse)}:</h3>
            <ul>
              <li>{t(keys.maintenance.item1)}</li>
              <li>{t(keys.maintenance.item2)}</li>
            </ul>

            <footer>
              <p>(DGE, 2010)</p>
            </footer>
          </div>
        </div>
      </Layout>
      <Outlet />
    </>
  )
}