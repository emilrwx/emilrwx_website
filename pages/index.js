import Head from 'next/head'
import Layout from '../layouts/layout'

export default function Home () {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h2>Hi Stranger</h2>
        <p>Welcome to my corner of the web. On this website I share thoughts about life and career. I will also try my best to write about things I'm interested in, such as software development, open source, machine learning, books, philosophy, privacy, security, etc.</p>

        <b>Contact:</b>
        <ul>
          <li>Matrix: @emilnuutinen:matrix.org</li>
          <li>Telegram: emilnuutinen</li>
          <li>Github: <a href='https://github.com/emilnuutinen'>emilnuutinen</a></li>
        </ul>

        <b>This website:</b>
        <p>If you find any mistakes, bugs or other inappropriateness here, leave an issue or a pull requests to the <a href='https://github.com/emilnuutinen/emilnuutinen_website'>repository</a>.</p>
      </main>
    </Layout>
  )
}
