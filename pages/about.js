import Head from 'next/head'

export default function About () {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h1>About</h1>

        <h2>Short version</h2>
        <p><b>Name:</b> Emil Nuutinen <br />
          <b>Location:</b> Turku, Finland <br />
          <b>Education:</b> B.B.A. Business Information Technology, Turku University of Applied Sciences <br />
          <b>Interests:</b> Data Science, Machine Learning, Software Development, Privacy, Reading, Gym, Drinking too much coffee <br />
          <b>Contact:</b> hello@emilnuutinen.com
        </p>

        <h2>Long version</h2>
        <p>Hi, my name is Emil. I'm a <b>software developer</b> studying to become a <b>data scientist</b>.</p>

        <p> I graduated with a degree in <b>Business Information Technology</b> in December 2020 and now I'm pondering between getting work experience or doing Computer Science Master's. My goal is to work in research some day.</p>

        <p>I'm interested in <b>NLP</b> generally and in privacy conserving software solutions. I want to contribute in improving <b>finnish NLP</b> solutions. I'm also interested in <b>Computer Vision</b> and <b>Robotics</b>. I have not yet decided what my main focus is. I'm interested in too many areas.</p>

        <h3>What I enjoy doing?</h3>
        <ul>
          <li>Research an interesting problem.</li>
          <li>Collect data about it & find useful insights from that data.</li>
          <li>Write a solution to that problem. (Ususally with Python)</li>
          <li>Learn new skills to do those three things better.</li>
        </ul>

        <p>I also enjoy fiddling with frontend projects. I try new things on this website weekly. I have fallen in love with algortihms too lately. I enjoy coding challenges and implementing random algorithms that I bump into.</p>

        <h3>Most used technologies</h3>
        <ul>
          <li>Python [The basic scientific stack]</li>
          <li>JavaScript [React, Next.js, Node.js]</li>
          <li>HTML & CSS</li>
        </ul>

        <h3>Social</h3>
        <p>I'm not that active on social media, but you can find me on:</p>
        <ul>
          <li><a href='https://twitter.com/EmilNuutinen'>Twitter</a></li>
          <li><a href='https://github.com/emilnuutinen'>Github</a></li>
        </ul>
      </main>
    </>
  )
}
