import * as React from 'react'
import { createRoot } from 'react-dom/client'

import './utils/i18n'

import { App } from './App'

import { ANIMATION_DURATION } from './constants'
document.documentElement.style.setProperty('--anim-time', `${ANIMATION_DURATION}ms`)

const root = createRoot(document.getElementById('main-div'))
root.render(<App />)
