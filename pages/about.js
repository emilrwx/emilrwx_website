import Head from 'next/head'
import Layout from '../components/layout'

export default function About () {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <h1>Who Am I?</h1>
        <p>Hi, I'm Emil. I'm a software developer from Finland. Focusing on Python & JavaScript.</p>

        <p>I have always been kind of a tech geek, but it wasn't until 2017 that I found my passion for developing apps & websites. Ever since then I have been building & breaking stuff with code almost daily.</p>

        <p>Somewhere along the journey I started reading more and more about data and what you can do with it. It did not take long for me to develop an interest in data and AI. It never stops to amaze me how much we can teach our computers to do.</p>

        <p>I love to explore, build & fix things. That is what drives me. The best part of my day is when I get a cup of coffee, sit down to my desk and start working on a project.</p>

        <p>When I'm not working I like to go for long walks, workout, read books or play some video games. I'm a lifelong learner, always curious and always learning something. That is one of the main reasons I love to work in this field. Since I started coding, there has not been a single day that I did not learn something new.</p>
        <h2>Contact:</h2>
        <ul>
          <li><a href='https://github.com/emilrwx'>Github</a></li>
          <li><a href='https://www.linkedin.com/in/emilnuutinen/'>LinkedIn</a></li>
          <li><a href='https://www.instagram.com/emilrwx/'>Instagram</a></li>
        </ul>
        <p>Want to know more? Want to chat with me? Want to work with me? Get in touch! :)</p>
        <div>
          <h2>What I like to do:</h2>
          <p>Most of my time is spent building wep apps with JavaScript and Python. I have been doing frontend since 2017, but I'm enjoying backend stuff more and more nowadays.</p>
          <p>I also enjoy searching for insights from data and building machine learning models. Lately I have been diving deep into natural language processing.</p>
          <p>I also enjoy fiddling with Linux on my free time. I use Linux ("I use Arch btw") as my daily driver and I really enjoy hacking and customizing it.</p>
        </div>
        <div>
          <h2>Most used technologies:</h2>
          <ul>
            <li>Python [Django]</li>
            <li>JavaScript [React, Gatsby]</li>
            <li>HTML & CSS</li>
            <li>I have used Node.js, Vue.js, Electron and Wordpress too, but not that much.</li>
          </ul>
        </div>
        <div>
          <h2>Education:</h2>
          <h4>BBA - Business Information Technology</h4>
          <p>Turku University of Applied Sciences (2017-2020)
            <ul>
              <li>Specialization in ICT services and business information systems</li>
              <li>Exchange year 2019-2020 in the University of Alicante in Spain</li>
            </ul>
          </p>
        </div>
      </div>
    </Layout>
  )
}
