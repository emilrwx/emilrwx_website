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
        <p>My name is Emil. I'm just a random dude trying to figure out how the universe works. I'm also a <strong>Software Developer</strong> who highly values privacy, security & open source oriented principles.</p>
        <h2>Facts about me: </h2>
        <ul>
          <li>I live in a small and cold country called Finland.</li>
          <li>I have also lived in Alicante, Spain.</li>
          <li>I used to work as a freelancing bouncer.</li>
          <li>I enjoy solving problems.</li>
          <li>I have a degree in Business Information Technology.</li>
          <li>I'm extremely curious about everything.</li>
          <li>I'm  committed to learn atleast one new thing every day.</li>
          <li>I'm probably the most introverted person you will meet.</li>
        </ul>

        <h2>What I like to do: </h2>
        <ul>
          <li>Research an interesting topic.</li>
          <li>Find useful insights from data.</li>
          <li>Write code to solve problems.</li>
          <li>Learn new skills to do those three things better.</li>
        </ul>

        <h2>Most used technologies: </h2>
        <ul>
          <li>JavaScript [React, Node.js]</li>
          <li>Python</li>
          <li>HTML & CSS</li>
        </ul>

        <h2>Social: </h2>
        <ul>
          <li>Email: me@emilrwx.com</li>
          <li>Matrix: @emilrwx:matrix.org</li>
          <li>Telegram: emilrwx</li>
          <li>Reddit: emilrwx</li>
          <li>Github: <a href='https://github.com/emilrwx'>emilrwx</a></li>
        </ul>
        <p>Want to know more? Want to chat with me? Want to work with me? Get in touch! :)</p>
      </main>
    </Layout>
  )
}
