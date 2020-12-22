import Head from 'next/head'
import Layout from '../layouts/layout'

export default function Home () {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>Hi Stranger</h1>
        <p>Welcome to my corner of the web. On this website I share thoughts about life and career. I will also try my best to write about things I'm interested in, such as software development, open source, machine learning, books, philosophy, privacy, security, etc.</p>

        <h2>Contact:</h2>
        <ul>
          <li>Matrix: @emilrwx:matrix.org</li>
          <li>Telegram: emilrwx</li>
          <li>Reddit: emilrwx</li>
        </ul>

        <h2>This website:</h2>
        <p>If you find any mistakes, bugs or other inappropriateness here, leave an issue or a pull requests to the <a href='https://github.com/emilrwx/emilrwx_website'>repository</a>.</p>
      </main>
    </Layout>
  )
}
