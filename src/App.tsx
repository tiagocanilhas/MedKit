import * as React from 'react'
import { createMemoryRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home'
import { Items } from './pages/Items'
import { Item } from './pages/Item'

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
])

export function App() {
  return <RouterProvider router={router} />
}
