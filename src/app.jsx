import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './login/login.jsx'
import Scenarios from './scenarios/scenarios.jsx'
import Calculate from './calculate/calculate.jsx'
import RequireAuth from './RequireAuth.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/scenarios" element={<RequireAuth><Scenarios /></RequireAuth>} />
        <Route path="/calculate" element={<RequireAuth><Calculate /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  )
}


