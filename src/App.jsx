import React from 'react'
import "./App.css"
import Header from './components/Header/Header.jsx'
import Mainside from './components/Mainside/Mainside.jsx'
export default function App() {
  return (
    <div className='bg-black min-h-screen'>
        <Header />
        <Mainside />
    </div>
  )
}
