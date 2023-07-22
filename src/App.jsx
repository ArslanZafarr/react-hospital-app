import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header/Header'
import Users from './pages/Users/Users'
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
