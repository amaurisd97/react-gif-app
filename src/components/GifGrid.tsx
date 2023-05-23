import { useFetchGifs } from '../hooks/useFetchGif'

import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }: { category: string }) => {
  const { data, loading } = useFetchGifs(category)
  return (
    <>
      <h3 className='animate__bounceIn'>{category}</h3>
      {loading && <p>Loading</p>}
      <div className='card-grid animate__bounceIn'>
        {data.map((gif) => (
          <GifGridItem key={gif.id} gif={gif} />
        ))}
      </div>
    </>
  )
}
