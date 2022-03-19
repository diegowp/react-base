import React from 'react'
import LogoMagalu from '/assets/logo-magalu.svg'

export function NavBar() {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img
            src={LogoMagalu}
            alt=''
            width='100'
            className='d-inline-block align-text-top'
          />
        </a>
      </div>
    </nav>
  )
}
