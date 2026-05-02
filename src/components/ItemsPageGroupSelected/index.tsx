import * as React from 'react'

import { ItemsBox } from '../ItemsBox'
import { ContainerWithScrollBar } from '../ContainerWithScrollBar'

import { MedKitItem } from '../../types/MedKitItem'
import { GroupPair } from '../../types/GroupPair'

import styles from './styles.module.css'


type ItemsPageGroupSelectedProps = {
  data: MedKitItem[]
  group: GroupPair
  allGroups: GroupPair[]
  setGroup: (group: GroupPair) => void
}

export function ItemsPageGroupSelected({ 
  data,
  group,
  allGroups,
  setGroup
}: ItemsPageGroupSelectedProps) {
  const selectedData = data.filter(item => item.group === group.name)

  return (
    <div className={styles.row}>

      <ItemsBox title={group.name} data={selectedData} color={group.color} />

      <ContainerWithScrollBar className={styles.groupsContainer}>
       {allGroups.map((currentGroup) => {
          const isActive = currentGroup.name === group.name;

          return (
            <div 
              key={currentGroup.name}
              className={`${styles.card} ${isActive ? styles.active : ''}`}
              style={{ backgroundColor: currentGroup.color || '#ccc' }}
              onClick={() => !isActive && setGroup(currentGroup)}
            >
              <p>{currentGroup.name}</p>
            </div>
          );
        })}
      </ContainerWithScrollBar>

    </div>
  )
}

