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
      <div>
        <h1>Blog</h1>
        <p>Random thoughts about career and life. Sometimes I share my journal writings here too.</p>
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
      </div>
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
