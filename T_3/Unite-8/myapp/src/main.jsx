import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Use1 from './Use1.jsx'
// import Use2 from './Use2.jsx'
// import Prect3 from './Prect3.jsx'
// import Prect4 from './Prect4.jsx'
// import Prect5 from './Prect5.jsx'
// import Prect6 from './Prect6.jsx'
// import Todo from './Prect7.jsx'
// import MyForm  from './React_Form/Form-Prect1.jsx'
// import UR from './React_Form/Form-Prect5.jsx'
import Main from './React_Form/Form-Prect6.jsx'
import comp from './React_Form/comp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Use2 />
    <Use1 /> 
    <Prect3/>
    <Prect4/>
    <Prect5/> */}
    {/* <Prect6/>
    <Todo/>
    <MyForm/> */}
    {/* <UR/> */}
    <Main/>
    {/* <comp/> */}
  </StrictMode>
)
