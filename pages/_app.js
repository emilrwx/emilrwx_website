import '../styles/globals.css'
import Layout from '../layouts/layout'
import '@fontsource/jetbrains-mono';

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
