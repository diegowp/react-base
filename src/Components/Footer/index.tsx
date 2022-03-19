import React from 'react'
import moment from 'moment'
import { FooterContent } from '@/Components/Footer/style'
import LogoMagalu from '/assets/logo-magalu.svg'

export function Footer() {
  return (
    <FooterContent className='container-fluid px-0 py-5 mt-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-2 d-flex flex-column justify-content-center logo-wrapper rounded'>
            <img src={LogoMagalu} width='100' title='Parceiro Magalu' />
            <small className='mt-2'>Hoje: {moment().format('LLLL')}</small>
          </div>
          <div className='col-10 d-flex flex-column justify-content-center'>
            <p>
              Cliente, para comprar nesse site você não precisa compartilhar
              seus dados com o dono da página. Para sua segurança, basta
              adicionar o produto à sacola e seguir o processo de compra online.
              Nunca entregue dinheiro ou passe dados de seu cartão de crédito ao
              divulgador.
            </p>
            <p className='mb-0'>
              Em caso de divergência de preços no site, o valor válido é o da
              sacola de compras. Rodovia dos Bandeirantes KM 68, 760 - Rio
              Abaixo - CEP: 13213-902 - Louveira/SP - CNPJ: 47960950/0449-27.
              Preços e condições de pagamento exclusivos para compras via
              internet. Ofertas válidas até o término de nossos estoques para
              internet. Vendas sujeitas à análise e confirmação de dados.
            </p>
          </div>
        </div>
      </div>
    </FooterContent>
  )
}
