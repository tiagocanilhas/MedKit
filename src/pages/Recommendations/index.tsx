import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from '../../components/Layout'

import { useText } from '../../hooks/useText'
import { useExit } from '../../hooks/useExit'

import styles from './styles.module.css'

export function Recommendations() {
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
          <h2>{t(keys.recommendations.title)}</h2>
          <ul>
            <li><strong>{t(keys.recommendations.maintenance)}:</strong> {t(keys.recommendations.maintenance_text)}</li>
            <li><strong>{t(keys.recommendations.accessibility)}:</strong> {t(keys.recommendations.accessibility_text)}</li>
            <li><strong>{t(keys.recommendations.identification)}:</strong> {t(keys.recommendations.identification_text)}</li>
            <li><strong>{t(keys.recommendations.safety)}:</strong> {t(keys.recommendations.safety_text)}</li>
          </ul>
              
          <footer>
            <p>(DGE, 2010)</p>
          </footer>
        </div>
      </Layout>
      <Outlet />
    </>
  )
}
