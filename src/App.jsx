import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Theory from './components/Theory/Theory'
import Extra from './components/Extra/Extra'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/theory' element={<Theory/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/user/:userid' element={<User />}/>
        <Route path='/github' element={<Github />}/>
        <Route path='/:slug' element={<Extra />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
