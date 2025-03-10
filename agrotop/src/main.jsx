import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import './assets/styles/mobile.css'
import './assets/styles/tab.css'
import './assets/styles/admin.css'
import './assets/styles/admin-mobile.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
