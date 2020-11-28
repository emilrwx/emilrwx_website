import Head from 'next/head'
import Layout from '../layouts/layout'

export default function About () {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h1>About</h1>
        <p>My name is Emil (the rwx comes from read-write-execute file permissions in Linux). I'm just a random dude trying to figure out how the universe works. I'm also a <strong>Software Developer</strong>.</p>
        <h2>Facts about me:</h2>
        <ul>
          <li>I live in a small and cold country called Finland.</li>
          <li>I used to work as a bouncer.</li>
          <li>I enjoy solving problems.</li>
          <li>I'm extremely curious about everything.</li>
          <li>I try to learn something new every day.</li>
          <li>I'm probably the most introverted person you will meet.</li>
          <li>I lived a year in Alicante, Spain.</li>
          <li>I have a degree in Business Information Technology.</li>
        </ul>

        <h2>What I like to do:</h2>
        <ul>
          <li>Do extensive research on an interesting topic.</li>
          <li>Find useful insights from data.</li>
          <li>Build web apps that solve real-world problems.</li>
          <li>Learn new skills to do those three things better.</li>
        </ul>

        <h2>Most used technologies:</h2>
        <ul>
          <li>JavaScript [React, Node.js]</li>
          <li>Python (the ususal data science stuff)</li>
          <li>HTML & CSS</li>
        </ul>

        <h2>Contact:</h2>
        <ul>
          <li>Email: me@emilrwx.com</li>
          <li>Telegram: @emilrwx</li>
          <li>Reddit: @emilrwx</li>
          <li>Github: <a href='https://github.com/emilrwx'>emilrwx</a></li>
        </ul>
        <p>Want to know more? Want to chat with me? Want to work with me? Get in touch! :)</p>
      </main>
    </Layout>
  )
}
