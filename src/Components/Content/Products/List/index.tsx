import { IProduct } from '@/Components/Content/Products/List/Types'
import { Loader } from '@/Components/Shared/Loader'
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../Card'
import { ProductsService } from './Services'

export function ProductList() {
  const { resAPI, getProducts } = ProductsService()

  // States
  const [products, setProducts] = useState<IProduct[] | null>(null)

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    if (resAPI.data) {
      const data = resAPI.data as IProduct[]
      setProducts(data)
    }
  }, [resAPI.data])

  return (
    <>
      <Loader enabled={resAPI.loading} />
      <div className='row row-cols-4 g-4 my-1'>
        {products && products.length > 0 ? (
          products.map(product => (
            <ProductCard key={Math.random()} item={product} />
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </>
  )
}
