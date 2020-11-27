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
        <p>Welcome to my corner of the web. I'm just a random dude trying to figure out how the universe works. I'm also a <strong>Software Developer</strong>.</p>
        <p>On this website I share thoughts about life and career. I will also try my best to write about things I'm interested in, such as JavaScript, Python, machine learning, interesting books, philosophy etc.</p>

        <h2>Contact:</h2>
        <ul>
          <li>Github: <a href='https://github.com/emilrwx'>emilrwx</a></li>
          <li>Telegram: @emilrwx</li>
          <li>Reddit: @emilrwx</li>
        </ul>

        <h2>This Wesite:</h2>
        <p>If you find any mistakes, bugs or other inappropriateness here, leave an issue or a pull requests to the <a href='https://github.com/emilrwx/emilrwx_website'>repository</a>.</p>
      </main>
    </Layout>
  )
}
