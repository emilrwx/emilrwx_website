import Head from 'next/head'
import Layout from '../layouts/layout'

export default function About () {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h2>About</h2>
        <p>My name is Emil. I'm just a random dude trying to figure out how the universe works. I'm also a <b>Software Developer</b> who highly values privacy, security & open source oriented principles. My goal is to become a <b>Data Scientist </b> or a <b>Machine Learning Engineer</b> in the near future. I want to help build data-driven solutions that respect privacy and security.</p>
        <b>Facts about me: </b>
        <ul>
          <li>I live in a small and cold country called Finland.</li>
          <li>I have also lived in Alicante, Spain.</li>
          <li>I have a degree in Business Information Technology.</li>
          <li>I used to work as a freelancing bouncer.</li>
          <li>I love solving problems.</li>
          <li>I'm extremely curious about everything.</li>
          <li>I'm  committed to learn atleast one new thing every day.</li>
          <li>I'm probably the most introverted person you will meet.</li>
        </ul>

        <b>What I like to do: </b>
        <ul>
          <li>Research an interesting problem.</li>
          <li>Collect data related to that problem & find useful insights from it.</li>
          <li>Write code to create a solution to that problem.</li>
          <li>Learn new skills to do those three things better.</li>
        </ul>

        <b>Most used technologies: </b>
        <ul>
          <li>JavaScript [React, Node.js]</li>
          <li>Python</li>
          <li>HTML & CSS</li>
        </ul>

        <b>Social: </b>
        <ul>
          <li>Matrix: @emilnuutinen:matrix.org</li>
          <li>Telegram: emilnuutinen</li>
          <li>Github: <a href='https://github.com/emilnuutinen'>emilnuutinen</a></li>
        </ul>
        <p>Want to know more? Want to chat with me? Want to work with me? Get in touch! :)</p>
      </main>
    </Layout>
  )
}
