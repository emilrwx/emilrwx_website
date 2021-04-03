import Layout from '@layouts/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function PostLayout (props) {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>
        <h1 style={{ marginBottom: '0px', marginTop: '15px' }}>{props.title}</h1>
        <small>{props.date}</small>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <Link href='/blog'>
          Back to blog index
        </Link>
      </main>
    </Layout>
  )
}
