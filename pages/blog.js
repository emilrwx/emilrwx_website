import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

import { getAllPosts } from '@api'

export default function Blog (props) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <main>
        {props.posts.map(function (post, idx) {
          return (
            <div key={idx} className={styles.post}>
              <h2 className={styles.blogHeader}>
                <Link href={'/posts/' + post.slug}>
                  {post.title}
                </Link>
              </h2>
              <small className={styles.date}>
                {post.date}
              </small>
              <p className={styles.excerpt}>
                {post.excerpt}
              </p>
            </div>
          )
        })}
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
