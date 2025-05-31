import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './NavBar.jsx'
import MainContent from './MainContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <MainContent />
  </StrictMode>,
)
