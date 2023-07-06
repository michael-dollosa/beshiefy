import Document, { Head, Html, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@mantine/next'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render () {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover'
          />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <meta property='og:url' content='https://beshieefy.vercel.app/' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='beshieefy' />
          <meta name='twitter:card' content='summary' />
          <meta property='og:description' content='beshieefy' />
          <meta
            property='og:image'
            content='https://beshieefy.vercel.app/thumbnail.png'
          />
          <meta name='title' content='Beshiefy' />
          <script>0</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
