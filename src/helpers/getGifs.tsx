import { Data } from '../types/interfaces.m'

export const getGif = async (category: string) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=WYOkAOgvoR7Yx77auv7lJeMbj5uAMwsj&q=${category}&limit=10&offset=0&rating=r&lang=en`

  const response = await fetch(URL)
  const { data }: { data: Data[] } = await response.json()
  const gif = data.map((img) => {
    return {
      id: img.id,
      url: img.images.downsized.url,
      title: img.title,
    }
  })
  return gif
}
