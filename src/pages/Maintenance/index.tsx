import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from '../../components/Layout'
import { ContainerWithScrollBar } from '../../components/ContainerWithScrollBar'

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
        <div className={styles.container}>
          <h2>Normas de Manutenção</h2>
          <ul>
            <li><strong>Localização:</strong> Deve ser de conhecimento geral, devidamente sinalizada e acessível.</li>
            <li><strong>Responsabilidade:</strong> A gestão e verificação periódica do conteúdo (incluindo datas de validade) é da responsabilidade do profissional responsável.</li>
            <li><strong>Documentação:</strong> Deve existir uma lista de verificação (checklist) do conteúdo.</li>
            <li><strong>Procedimentos:</strong> Recomenda-se a existência de instruções escritas sobre a atuação em caso de emergência.</li>
          </ul>

          <h2>O que NÃO utilizar</h2>
          <ul>
            <li>Algodão (pode absorver e infetar).</li>
            <li>Álcool, Água Oxigenada ou Tintura de Iodo (podem atrasar a cicatrização).</li>
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