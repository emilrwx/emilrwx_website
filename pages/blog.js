import Head from 'next/head'
import Link from 'next/link'

import { getAllPosts } from '@api'

export default function Blog (props) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <main>
        <h1>Blog</h1>
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
    </>
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
