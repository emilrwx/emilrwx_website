import Head from 'next/head'

export default function About () {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h2>About</h2>
        <p>Hi, my name is Emil. I'm a <b>software developer</b> studying to become a <b>data scientist</b>.</p>

        <p> I graduated with a degree in <b>Business Information Technology</b> in December 2020 and now I'm pondering between getting work experience or doing Computer Science Master's and PhD. My dream is to work in research.</p>

        <p>I'm interested in <b>NLP</b> generally and in privacy conserving data-driven solutions. I'm also interested about improving Finnish NLP.</p>

        <b>How I spend my days?</b>
        <ul>
          <li>Research an interesting problem.</li>
          <li>Collect data related to that problem & find useful insights from it.</li>
          <li>Write a solution to that problem.</li>
          <li>Learn new skills to do those three things better.</li>
        </ul>
        <p>OR</p>
        <ul>
          <li>Look into some interesting data.</li>
          <li>Find an interesting problem from it.</li>
          <li>Write a solution to that problem.</li>
          <li>Learn new skills to do those three things better.</li>
        </ul>

        <b>Most used technologies</b>
        <ul>
          <li>Python [The basic scientific stack]</li>
          <li>JavaScript [React, Next.js, Node.js]</li>
          <li>HTML & CSS</li>
        </ul>

        <b>Contact</b>
        <p>I'm not that active on social media, but you can find me on:</p>
        <ul>
          <li><a href='https://twitter.com/EmilNuutinen'>Twitter</a></li>
          <li><a href='https://github.com/emilnuutinen'>Github</a></li>
        </ul>
      </main>
    </>
  )
}
