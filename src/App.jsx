import React from 'react'
import LoginApp from './pages/Login'
import Registration from './pages/Registration'
import Content from './pages/Content'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginApp />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  )
}
