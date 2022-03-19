import React from 'react'

export function Loader(props: { enabled: boolean }) {
  return props.enabled ? (
    <div className='d-flex justify-content-center'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Carregando...</span>
      </div>
    </div>
  ) : null
}
