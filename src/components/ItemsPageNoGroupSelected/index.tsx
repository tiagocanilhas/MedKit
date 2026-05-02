import * as React from 'react'

import { GroupPair } from '../../types/GroupPair'

import styles from './styles.module.css'

type ItemsPageNoGroupSelectedProps = {
  groups: GroupPair[]
  setGroup: (group: GroupPair) => void
}

export function ItemsPageNoGroupSelected({ groups, setGroup }: ItemsPageNoGroupSelectedProps) {
  const midIndex = Math.floor(groups.length / 2);

  const firstRow = groups.slice(0, midIndex);
  const secondRow = groups.slice(midIndex);

  return (
    <>
      <div className={styles.row}>
        {firstRow.map((group, index) => (
          <div 
            key={`top-${index}`}
            className={styles.card}
            style={{ backgroundColor: group.color }}
            onClick={() => setGroup(group)}
          >
            <p>{group.name}</p>
          </div>
        ))}
      </div>
      
      <div className={styles.row}>
        {secondRow.map((group, index) => (
          <div 
            key={`bottom-${index}`}
            className={styles.card}
            style={{ backgroundColor: group.color }}
            onClick={() => setGroup(group)}
          >
            <p>{group.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

