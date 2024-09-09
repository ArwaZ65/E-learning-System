import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Loading from './Components/Loading.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App/>
    <Loading/>

  </StrictMode>,
)
