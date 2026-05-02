import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from '../../components/Layout'
import { ContainerWithScrollBar } from '../../components/ContainerWithScrollBar'

import { useExit } from '../../hooks/useExit'

import styles from './styles.module.css'

export function Recommendations() {
  const { exitingPath, exit } = useExit()
  const isExiting = !!exitingPath

  function handleExit() {
    exit('/')
  }

  return (
    <>
      <Layout onBack={handleExit} isExiting={isExiting}>
        <ContainerWithScrollBar className={styles.container}>
          <h2>Recomendações Importantes</h2>
          <ul>
            <li><strong>Manutenção:</strong> Verifique regularmente a validade dos produtos, especialmente antissépticos e soros, e reponha o material gasto.</li>
            <li><strong>Acessibilidade:</strong> A mala deve estar num local conhecido por todos os funcionários, seco, fresco e fora do alcance direto das crianças pequenas, mas de acesso rápido para os adultos.</li>
            <li><strong>Identificação:</strong> A caixa deve ser visível (cor vermelha ou com cruz branca) e fácil de transportar.</li>
            <li><strong>Segurança:</strong> Evite guardar medicamentos que exijam receita médica, a menos que sejam de uso pessoal e autorizado de uma criança específica.</li>
          </ul>
      
          <footer>
            <p>(DGE, 2010)</p>
          </footer>
        </ContainerWithScrollBar>
      </Layout>
      <Outlet />
    </>
  )
}
