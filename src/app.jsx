import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './login/login.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
