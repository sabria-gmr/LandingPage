import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CoursesCards from './components/CoursesCards'
import Body from './components/Body'
import './Styles/Style.css'
import Hero from './components/Hero'


function App() {

  return (
    <Router>
      <div className='bg-white dark:bg-black'>
        <div className='sticky top-0 z-50'>
          <Header />
        </div>
        <Hero />
        <CoursesCards />
        <Body />
        <Footer className='bg-white dark:bg-black' />
      </div></Router>



  )
}

export default App
