import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs'
import { GifData } from '../types/interfaces.m'

export const useFetchGifs = (category: string) => {
  const [state, setState] = useState<GifData>({
    data: [{ id: '', url: '', title: '' }],
    loading: true,
  })

  useEffect(() => {
    getGif(category).then((img) => {
      setState({
        data: img,
        loading: false,
      })
    })
  }, [category])

  return state
}
