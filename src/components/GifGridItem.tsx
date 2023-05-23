export const GifGridItem = ({
  gif,
}: {
  gif: { title: string; url: string }
}) => {
  return (
    <div className='card animate__bounceIn'>
      <p>{gif.title}</p>
      <img src={gif.url}></img>
    </div>
  )
}
