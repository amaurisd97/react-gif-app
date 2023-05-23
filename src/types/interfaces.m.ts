export interface Response {
  data: Data[]
  pagination: Pagination
  meta: Meta
}

export interface Pagination {
  total_count: number
  count: number
  offset: number
}

export interface Meta {
  status: number
  msg: string
  response_id: string
}

export interface Data {
  type: string
  id: string
  url: string
  slug: string
  bitly_gif_url: string
  bitly_url: string
  embed_url: string
  username: string
  source: string
  title: string
  rating: string
  content_url: string
  source_tld: string
  source_post_url: string
  is_sticker: number
  import_datetime: string
  trending_datetime: string

  images: Images
  analytics_response_payload: string

  analytics: {}
}

export interface Images {
  original: ImagesSizes

  downsized: ImagesSizes

  downsized_large: ImagesSizes

  downsized_medium: ImagesSizes

  downsized_small: ImagesSizes

  downsized_still: ImagesSizes

  fixed_height: ImagesSizes

  fixed_height_downsampled: ImagesSizes

  fixed_height_small: ImagesSizes

  fixed_height_small_still: ImagesSizes

  fixed_height_still: ImagesSizes

  fixed_width: ImagesSizes

  fixed_width_downsampled: ImagesSizes

  fixed_width_small: ImagesSizes

  fixed_width_small_still: ImagesSizes

  fixed_width_still: ImagesSizes

  looping: ImagesSizes

  original_still: ImagesSizes

  original_mp4: ImagesSizes

  preview: ImagesSizes

  preview_gif: ImagesSizes

  preview_webp: ImagesSizes

  '480w_still': ImagesSizes
}

export interface ImagesSizes {
  height: string
  width: string
  size: string
  url: string
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
}

export interface Analitycs {
  onload: {
    url: string
  }

  onclick: {
    url: string
  }

  onsent: {
    url: string
  }
}

export interface GifData {
  data: { id: string; url: string; title: string }[]
  loading: boolean
}
