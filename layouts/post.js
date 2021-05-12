import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Post.module.css'

export default function PostLayout (props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main className={styles.layout}>
        <h1 className={styles.header}>{props.title}</h1>
        <small>Last updated {props.date}</small>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <Link href='/blog'>
          Back to blog index
        </Link>
      </main>
    </>
  )
}
