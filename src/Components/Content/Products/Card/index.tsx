import { IProduct } from '@/Components/Content/Products/List/Types'
import React from 'react'
import { ProductCardItem } from './style'

export function ProductCard(props: { item: IProduct }) {
  function redirect(url: string) {
    return window.open(`https://www.parceiromagalu.com.br${url}`, '_blank')
  }

  return (
    <div className='col'>
      <ProductCardItem className='card rounded-3 shadow'>
        <img src={props.item.img} className='card-img-top rounded-3' />
        <div className='card-body d-flex flex-column justify-content-end'>
          <h5 className='card-title'>{props.item.title}</h5>
          <div className='card__productInfo'>
            <div className='card__productInfo--rate'></div>
            <div className='card__productInfo--price'>
              <small className='card__productInfo--price old-price'>
                {props.item.oldPrice}
              </small>
              <p className='card__productInfo--price new-price'>
                {props.item.price}
              </p>
            </div>
          </div>
        </div>
        <div className='card-footer d-grid gap-2'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => redirect(props.item.link)}
          >
            Veja mais
          </button>
        </div>
      </ProductCardItem>
    </div>
  )
}
