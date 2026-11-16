import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Component/Home.jsx'
import Dashboard from './Component/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
    <Dashboard />
  </StrictMode>,
)
