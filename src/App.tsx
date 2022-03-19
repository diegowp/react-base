import React from 'react'
import { NavBar } from '@/Components/Header/NavBar'
import { Content } from '@/Components/Content'
import { GlobalStyles } from '@/Styles/GlobalStyles'
import { Footer } from '@/Components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid px-0'>
        <GlobalStyles />
        <header className='sticky-top'>
          <NavBar />
        </header>
        <section id='main'>
          <Content />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
