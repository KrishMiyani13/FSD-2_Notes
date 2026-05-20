import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MapFiltter from './MapFiltter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MapFiltter />
  </StrictMode>,
)
