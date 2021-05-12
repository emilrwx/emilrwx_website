import '../styles/globals.css'
import Layout from '../layouts/layout'
import 'typeface-open-sans'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
