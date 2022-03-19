import React from 'react'
import { BannersHome } from '@/Components/Content/Banners/Home'
import { ProductList } from '@/Components/Content/Products/List'

export function Home() {
  return (
    <div className='container'>
      <section className='banner-home'>
        <BannersHome />
      </section>
      <section className='products'>
        <ProductList />
      </section>
    </div>
  )
}
