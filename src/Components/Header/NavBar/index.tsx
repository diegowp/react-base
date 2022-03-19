import React from 'react'
import { Link } from 'react-router-dom'
import LogoMagalu from '/assets/logo-magalu.svg'

export function NavBar() {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img
            src={LogoMagalu}
            alt=''
            width='100'
            className='d-inline-block align-text-top'
          />
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a
                className='nav-link'
                href={`${import.meta.env.VITE_LINK_LOJA}`}
                target='_blank'
              >
                Todos os produtos
              </a>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/sobre'>
                Sobre Nós
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
