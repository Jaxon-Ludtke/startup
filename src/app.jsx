import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './login/login.jsx'
import Scenarios from './scenarios/scenarios.jsx'
import Calculate from './calculate/calculate.jsx'
import RequireLogin from './requirelogin.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/scenarios" element={<RequireLogin><Scenarios /></RequireLogin>} />
        <Route path="/calculate" element={<RequireLogin><Calculate /></RequireLogin>} />
      </Routes>
    </BrowserRouter>
  )
}


