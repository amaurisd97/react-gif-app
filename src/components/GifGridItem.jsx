import PropTypes from 'prop-types'

export const GifGridItem = ({ gif }) => {
  return (
    <div className='card animate__bounceIn'>
      <p>{gif.title}</p>
      <img src={gif.url}></img>
    </div>
  )
}

GifGridItem.propTypes = {
  gif: PropTypes.object.isRequired,
}
