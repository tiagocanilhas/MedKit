import * as React from 'react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home'

import { Items } from './pages/Items'
import { Item } from './pages/Item'

import { Maintenance } from './pages/Maintenance'

import { Recommendations } from './pages/Recommendations'

import './global.css'

const router = createMemoryRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/items',
    element: <Items />,
    children: [
      {
        path: ':id',
        element: <Item />,
      },
    ],
  },
  {
    path: '/maintenance',
    element: <Maintenance />,
  },
  {
    path: '/recommendations',
    element: <Recommendations />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
