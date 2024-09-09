import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Add from './Components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/add' element={<Add />}></Route>
        </Routes>
        </div>
    </>
  )
}

export default App
