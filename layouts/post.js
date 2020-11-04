import Layout from '@layouts/layout'
import Head from 'next/head'

export default function PostLayout (props) {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <h1 style={{ marginBottom: 0 }}>{props.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
    </Layout>
  )
}
