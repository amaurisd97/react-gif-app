import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGif'
// import { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'
// import { getGif } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {
  // const [Gif, setGif] = useState([])
  const { data, loading } = useFetchGifs(category)

  // useEffect(() => {
  //   getGif(category).then(setGif)
  // }, [category])
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

GifGrid.propTypes = {
  category: PropTypes.string,
}
