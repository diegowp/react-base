import { useCallBase } from '@/Services/CallBase'

export function ProductsService() {
  const { resAPI, doCall } = useCallBase()

  const getProducts = () =>
    doCall(
      '/assets/_MOCK_/products.json',
      {
        method: 'GET',
      },
      'Erro! Não foi possível buscar a lista de produtos'
    )

  return {
    resAPI,
    getProducts,
  }
}
