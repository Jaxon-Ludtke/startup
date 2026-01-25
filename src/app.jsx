import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './login/login.jsx'
import Scenarios from './scenarios/scenarios.jsx'
import Calculate from './calculate/calculate.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/calculate" element={<Calculate />} />
      </Routes>
    </BrowserRouter>
  )
}


