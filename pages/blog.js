import Head from 'next/head'
import Link from 'next/link'
import Layout from '@layouts/layout'

import { getAllPosts } from '@api'

export default function Blog (props) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <main>
        <h2>Blog</h2>
        <p>Random ramblings about everything.</p>
        <ul>
          {props.posts.map(function (post, idx) {
            return (
              <li key={idx}>{post.date}:&nbsp;
                <Link href={'/posts/' + post.slug}>
                  <a>{post.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </Layout>
  )
}

export async function getStaticProps () {
  const allPosts = await getAllPosts()
  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
  return {
    props: {
      posts: allPosts
    }
  }
}
