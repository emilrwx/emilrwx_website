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
        <p>My name is Emil, welcome to my website. I'm a professional problem solver trying to figure out how the universe works. I'm also a <strong>Software Developer</strong>.</p>
        <p>On this site you can find info about me and my career. I will also try my best to write about things I'm interested in, such as JavaScript, Python, machine learning, books I read, philosophy etc.</p>
        <h2>Quick Links</h2>
        <ul>
          <li><a href='https://github.com/emilrwx'>Github</a></li>
          <li><a href='https://www.linkedin.com/in/emilnuutinen/'>LinkedIn</a></li>
          <li><a href='https://www.instagram.com/emilrwx/'>Instagram</a></li>
        </ul>
      </main>
    </Layout>
  )
}
