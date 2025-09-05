import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './Router/router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoute />
  </StrictMode>
)
