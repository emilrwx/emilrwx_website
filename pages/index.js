import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

import { getAllPosts } from '@api'

export default function Home (props) {
  return (
    <>
      <Head>
        <title>Emil Nuutinen</title>
      </Head>
      <div>
        <h1>Hi Stranger!</h1>
        <p>Welcome to my corner of the web. This website lives mainly as a sandbox for me to fiddle with different web technologies. I also try my best to blog about things I'm interested in, such as software development, data science, machine learning, privacy, etc.</p>

        <h2>Latest blog posts</h2>

        {props.posts.map(function (post, idx) {
          return (
            <div key={idx} className={styles.post}>
              <small className={styles.date}>
                {post.date}
              </small>
              <h3 className={styles.blogHeader}>
                <Link href={'/posts/' + post.slug}>
                  {post.title}
                </Link>
              </h3>
              <p className={styles.excerpt}>
                {post.excerpt}
              </p>
            </div>
          )
        })}

      </div>
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
