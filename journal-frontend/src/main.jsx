import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import Login from './pages/login.jsx'
import Register from './pages/journalRegister.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register/>
  </StrictMode>,
)
