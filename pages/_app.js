import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
