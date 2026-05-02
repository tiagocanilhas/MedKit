import * as React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Loading } from '../../components/Loading'
import { Layout } from '../../components/Layout'
import { ItemsPageGroupSelected } from '../../components/ItemsPageGroupSelected'
import { ItemsPageNoGroupSelected } from '../../components/ItemsPageNoGroupSelected'

import { useExit } from '../../hooks/useExit'
import { useMedKitData } from '../../hooks/useMedkitData'

import { GroupPair } from '../../types/GroupPair'

import styles from './styles.module.css'

export function Items() {
  const { exitingPath, exit } = useExit()
  const isExiting = !!exitingPath
  
  const { isLoading, data, error } = useMedKitData()

  const [group, setGroup] = useState<GroupPair | null>(null)
  function selectItemGroup(group: GroupPair) {
    setGroup(group)
  }
  
  const allGroups: GroupPair[] = data ? Array.from(
      data.reduce((acc, item) => {
        if (!acc.has(item.group)) {
          acc.set(item.group, { 
            name: item.group, 
            color: item.color || '#ccc' 
          });
        }
        return acc;
      }, new Map<string, { name: string; color: string }>())
      .values()
    )
  : [];
 
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
        <div className={styles.container}>
          {group ? (
            <ItemsPageGroupSelected
              data={data}
              group={group}
              allGroups={allGroups}
              setGroup={selectItemGroup}
            />
          ) : (
            <ItemsPageNoGroupSelected groups={allGroups} setGroup={selectItemGroup} />
          )}
        </div>
      </Layout>
      
      <Outlet context={data} />
    </>
  )
}