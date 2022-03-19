import styled from 'styled-components'

export const ProductCardItem = styled.div`
  height: 360px;
  max-height: 360px;

  .card-img-top {
    width: auto;
    align-self: center;
    max-height: 200px;
    padding-top: 10px;
  }

  .card-title {
    font-size: 0.8em;
  }

  .card__productInfo {
    &--price {
      &.old-price {
        text-decoration: line-through;
        color: var(--bs-gray-500);
      }
      &.new-price {
        font-weight: 700;
        font-size: 1.5em;
      }
    }
  }
`
