import '../styles/globals.css'
import Layout from '../layouts/layout'
import 'typeface-poppins'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
