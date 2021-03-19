import Head from 'next/head'
import Layout from '../layouts/layout'
import Header from '../components/header'

export default function About () {
  return (
    <>
      <Header title='Now' description='What am I doing now?' />
      <Layout>
        <Head>
          <title>Now</title>
        </Head>
        <main>
          <h2>Now</h2>
        </main>
      </Layout>
    </>
  )
}
