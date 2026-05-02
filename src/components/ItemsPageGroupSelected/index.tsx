import * as React from 'react'

import { ItemsBox } from '../ItemsBox'
import { ContainerWithScrollBar } from '../ContainerWithScrollBar'

import { MedKitItem } from '../../types/MedKitItem'
import { GroupPair } from '../../types/GroupPair'

import styles from './styles.module.css'


type ItemsPageGroupSelectedProps = {
  data: MedKitItem[]
  group: GroupPair
  remainingGroups: GroupPair[]
  setGroup: (group: GroupPair) => void
}

export function ItemsPageGroupSelected({ 
  data,
  group,
  remainingGroups,
  setGroup
}: ItemsPageGroupSelectedProps) {
  const selectedData = data.filter(item => item.group === group.name)

  return (
    <div className={styles.row}>

      <ItemsBox title={group.name} data={selectedData} color={group.color} />

      <ContainerWithScrollBar className={styles.remainingGroupsContainer}>
        {remainingGroups.map((group, index) => (
          <div 
            key={index}
            className={styles.card}
            style={{ backgroundColor: group.color }}
            onClick={() => setGroup(group)}
          >
            <p>{group.name}</p>
          </div>
        ))}
      </ContainerWithScrollBar>

    </div>
  )
}

