import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Use1 from './Use1.jsx'
import Use2 from './Use2.jsx'
import Prect3 from './Prect3.jsx'
import Prect4 from './Prect4.jsx'
import Prect5 from './Prect5.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Use2 />
    <Use1 /> 
    <Prect3/>
    <Prect4/> */}
    <Prect5/>
  </StrictMode>,
)
