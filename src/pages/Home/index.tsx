import * as React from 'react'

import { HomeItem } from '../../components/HomeItem'
import MedKitIcon from './MedKit.svg'
import RecommendationsIcon from './Recommendations.svg'

import { useExit } from '../../hooks/useExit'
import { useText } from '../../hooks/useText'

import styles from './styles.module.css'

export function Home() {
  const { t, keys } = useText()
  const { exitingPath, exit } = useExit()

  const isExiting = !!exitingPath

  function openMedkit() {
    exit('/items')
  }

  function openMaintenance() {
    exit('/maintenance')
  }

  function openRecommendations() {
    exit('/recommendations')
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={`${styles.title} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}>{t(keys.home.title)}</h1>
        <p className={`${styles.text} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}>{t(keys.home.description)}</p>
      </div>

      <div className={styles.linksContainer}>
        <div className={styles.wrapper}>
          <HomeItem onClick={openMedkit} isExiting={exitingPath === '/items'} icon={MedKitIcon} />
        </div>

        <div className={styles.row}>
          <div className={styles.wrapper}>
            <HomeItem onClick={openMaintenance} isExiting={exitingPath === '/maintenance'} icon={'/images/Maintenance.png'} />
          </div>
          <div className={styles.wrapper}>
            <HomeItem onClick={openRecommendations} isExiting={exitingPath === '/recommendations'} icon={RecommendationsIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}
