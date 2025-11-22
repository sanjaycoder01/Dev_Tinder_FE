import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import appstore from './utils/appstore'
import Feed from './components/Feed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={appstore}>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Body />} >
        <Route path='/' element={<Feed />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
