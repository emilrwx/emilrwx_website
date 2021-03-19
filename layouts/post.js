import Layout from '@layouts/layout'
import Head from 'next/head'
import Header from '../components/header'

export default function PostLayout (props) {
  return (
    <>
      <Header title={props.title} description={props.date} />
      <Layout>
        <Head>
          <title>{props.title}</title>
        </Head>
        <article>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </article>
      </Layout>
    </>
  )
}
