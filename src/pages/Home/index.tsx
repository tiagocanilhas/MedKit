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
      <div className={`${styles.header} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}>

        <div className={styles.logosContainer}>
          <img className={styles.logo} src="/images/eses_logo.png" alt="eses_logo"  />
          <img className={styles.logo} src="/images/creative_lab_logo.png" alt="creative_lab_logo"  />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{t(keys.home.title)}</h1>
          <p className={styles.text}>{t(keys.home.description)}</p>
        </div>
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

      <footer className={`${styles.footer} ${isExiting ? 'u-fadeOut' : 'u-fadeIn'}`}>
        <p><strong>{t(keys.home.footer.courseLabel)}</strong> <br/> Licenciatura em Educação Básica</p>
        <p><strong>{t(keys.home.footer.authorLabel)}</strong> <br/> Angélica Martins, Madalena Rosário, Mafalda Fernandes, Mónica Rosa e Tiago Canilhas </p> 
        <p><strong>{t(keys.home.footer.supervisionLabel)}</strong> <br/> Marisa Correia, Ricardo Coscurão e Teresa Ribeirinha (CIEQV; ESE-IPSantarém)</p>
        <p><strong>{t(keys.home.footer.revisionLabel)}</strong> <br/> Isilda Ferreira (CIEQV; ESS-IPSantarém)</p>
      </footer>
    </div>
  )
}
