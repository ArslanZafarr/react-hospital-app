import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin-dashboard' element={< AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
