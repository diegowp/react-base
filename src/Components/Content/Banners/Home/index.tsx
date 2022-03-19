import React, { useEffect } from 'react'

export function BannersHome() {
  const {
    VITE_IMG_BANNER_HOME,
    VITE_LINK_BANNER_HOME,
    VITE_TITLE_BANNER_HOME,
  } = import.meta.env

  return (
    <div className='container px-0 mt-1'>
      <a href={`${VITE_LINK_BANNER_HOME}`} target='_blank'>
        <img
          width='100%'
          src={`${VITE_IMG_BANNER_HOME}`}
          title={`${VITE_TITLE_BANNER_HOME}`}
        />
      </a>
    </div>
  )
}
