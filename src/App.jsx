import React from 'react'
import LoginApp from './pages/Login'
import Registration from './pages/Registration'
import Content from './pages/Content'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/test'
import GeneralTest from './pages/GeneralTest'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginApp />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/content" element={<Content />} />
        <Route path='/test' element={<Test/>}></Route>
        <Route path='/generaltest' element={<GeneralTest />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
