import { SITE } from '@config'
import { Canvas, Image } from '@napi-rs/canvas'
import satori from 'satori'

const fetchFonts = async () => {
  // Regular Chinese Font
  const zhFontFileRegular = await fetch(
    new URL('/fonts/NotoSansJP-Regular.woff', SITE.website)
  )
  const zhFontRegular: ArrayBuffer = await zhFontFileRegular.arrayBuffer()

  // Bold Chinese Font
  const zhFontFileBold = await fetch(
    new URL('/fonts/NotoSansJP-Bold.woff', SITE.website)
  )
  const zhFontBold: ArrayBuffer = await zhFontFileBold.arrayBuffer()

  // Regular English Font
  const enFontFileRegular = await fetch(
    new URL('/fonts/Inter-Regular.woff', SITE.website)
  )
  const enFontRegular: ArrayBuffer = await enFontFileRegular.arrayBuffer()

  // Bold English Font
  const enFontFileBold = await fetch(
    new URL('/fonts/Inter-Bold.woff', SITE.website)
  )
  const enFontBold: ArrayBuffer = await enFontFileBold.arrayBuffer()

  return { enFontBold, enFontRegular, zhFontBold, zhFontRegular }
}

const ogImage = (title: string) => {
  return (
    <div
      style={{
        alignItems: 'center',
        background: '#20233d',
        display: 'flex',
        fontFamily: "Inter, 'Noto Sans JP', sans-serif",
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          background: '#1d1f36',
          border: '8px solid #b326ff',
          borderRadius: '8px',
          display: 'flex',
          height: '80%',
          justifyContent: 'center',
          margin: '2.5rem',
          opacity: '0.9',
          position: 'absolute',
          right: '-1px',
          top: '-1px',
          width: '88%',
        }}
      />

      <div
        style={{
          background: '#1e223c',
          border: '8px solid #b326ff',
          borderRadius: '8px',
          display: 'flex',
          height: '80%',
          justifyContent: 'center',
          margin: '2rem',
          width: '88%',
        }}
      >
        <div
          style={{
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            height: '90%',
            justifyContent: 'space-between',
            margin: '20px',
            width: '90%',
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              maxHeight: '84%',
              overflow: 'hidden',
            }}
          >
            {title}
          </p>
          <div
            style={{
              color: '#ddd',
              display: 'flex',
              fontSize: 28,
              justifyContent: 'space-between',
              marginBottom: '8px',
              width: '100%',
            }}
          >
            <span>
              by{' '}
              <span
                style={{
                  color: 'transparent',
                }}
              >
                "
              </span>
              <span style={{ fontWeight: 'bold', overflow: 'hidden' }}>
                {SITE.author}
              </span>
            </span>

            <span style={{ fontWeight: 'bold', overflow: 'hidden' }}>
              {SITE.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const generateOgImage = async (title = SITE.title) => {
  const { enFontRegular, enFontBold, zhFontRegular, zhFontBold } =
    await fetchFonts()

  const width = 1200
  const height = 630

  const satoriSvg = await satori(ogImage(title), {
    embedFont: true,
    fonts: [
      {
        data: zhFontRegular,
        name: 'Noto Sans JP',
        style: 'normal',
        weight: 400,
      },
      {
        data: zhFontBold,
        name: 'Noto Sans JP',
        style: 'normal',
        weight: 700,
      },
      {
        data: enFontRegular,
        name: 'Inter',
        style: 'normal',
        weight: 400,
      },
      {
        data: enFontBold,
        name: 'Inter',
        style: 'normal',
        weight: 700,
      },
    ],
    height,
    width,
  })

  const image = new Image()
  image.src = Buffer.from(satoriSvg, 'utf8')

  const canvas = new Canvas(width, height)
  const ctx = canvas.getContext('2d')

  ctx.drawImage(image, 0, 0)

  const jpegData = await canvas.encode('jpeg')

  return jpegData
}

export default generateOgImage
