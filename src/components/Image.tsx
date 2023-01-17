import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

interface Props {
  src: string
}

export default function Image({ src }: Props) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
  })

  const cldImg = cld.image(src).format('auto').quality('auto')

  return (
    <AdvancedImage
      cldImg={cldImg}
      plugins={[
        lazyload({ threshold: 0.25 }),
        responsive({ steps: 200 }),
        placeholder({ mode: 'blur' }),
      ]}
    />
  )
}
