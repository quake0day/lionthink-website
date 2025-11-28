import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import WolfCTF from './pages/WolfCTF.jsx'
import SoraEdu from './pages/SoraEdu.jsx'
import OSLab from './pages/OSLab.jsx'
import Admin from './pages/Admin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/wolfctf" element={<WolfCTF />} />
        <Route path="/soraedu" element={<SoraEdu />} />
        <Route path="/oslab" element={<OSLab />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
