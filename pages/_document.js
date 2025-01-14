import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/sjxdev-icon.ico" />
        <link rel="icon" type="image/x-icon" href="/sjxdev-icon.ico" />
        <meta name="application-name" content="SJX Dev Blog" />
        <meta name="msapplication-TileImage" content="/sjxdev-icon.ico" />
        <meta name="msapplication-square70x70logo" content="/sjxdev-icon.ico" />
        <meta name="msapplication-square150x150logo" content="/sjxdev-icon.ico" />
        <meta name="msapplication-square310x310logo" content="/sjxdev-icon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
