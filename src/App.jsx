import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import Content from './pages/Content'
import Test from './pages/test'
import GeneralTest from './pages/GeneralTest'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import CheckUp from './components/CheckUp'
import DefaultTest from './components/defultTest'
import Completetheapplication from './pages/CompletetheapplicationTestOne'
import CompletetheapplicationTwo from './pages/CompletetheapplicationTestTwo'
import Payment from './pages/payment'
import LoginApp from './pages/Login'
import Consultantsfilter from './pages/Consultantsfilter'
import Medicalspecialties from './pages/Medicalspecialties'
import DoctorPage from './pages/Doctorpage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DoctorPage/>}></Route>
        <Route path="/CheckTest" element={<GeneralTest />}>
          <Route index element={<DefaultTest/>} />
          <Route path='CheckUp' element={<CheckUp />} /> 
          <Route path="men-health" element={<div>سلامت مردان</div>} /> 
          <Route path="women-health" element={<div>سلامت زنان</div>} /> 
          <Route path="children-health" element={<div>سلامت کودکان</div>} />
          <Route path="heart" element={<div>چکاپ قلب</div>} />
          <Route path="diabetes" element={<div>دیابت</div>} />
          <Route path="prevention" element={<div>پیشگیری و سلامت</div>} />
        </Route>

        <Route path="/register" element={<Registration />} />
        <Route path="/content" element={<Content />} />
        <Route path='/test' element={<Test />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path='/Complete' element={<Completetheapplication />} />
        <Route path='/Complete2' element={<CompletetheapplicationTwo />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit' element={<EditProfile/>} />
      </Routes>
    </BrowserRouter>
  )
}
