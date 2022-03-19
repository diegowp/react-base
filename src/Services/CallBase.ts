import React, { useCallback, useState } from 'react'

type IError = {
  hasError: boolean
  msg: string
}

export function useCallBase() {
  const [data, setData] = useState<unknown | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<IError>({
    hasError: false,
    msg: '',
  })

  const doCall = useCallback(
    async (url: string, config: RequestInit, msgError: string) => {
      setLoading(true)
      try {
        const doFeth = await fetch(url, {
          ...config,
          mode: 'no-cors',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
        })
        if (doFeth.status.toString().includes('20')) {
          const resp = await doFeth.json()
          setData(resp)
        }
      } catch (err) {
        setError({
          hasError: true,
          msg: msgError,
        })
      } finally {
        setLoading(false)
      }
    },
    []
  )

  const resAPI = {
    data,
    loading,
    error,
  }

  return {
    resAPI,
    doCall,
  }
}
