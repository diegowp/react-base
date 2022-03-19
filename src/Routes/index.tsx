import React from 'react'
import { AboutUs } from '@/Components/Pages/About'
import { Home } from '@/Components/Pages/Home'
import { Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre' element={<AboutUs />} />
    </Routes>
  )
}
