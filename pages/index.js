import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Emil Nuutinen</title>
      </Head>
      <main>
        <p>Hi Stranger! Welcome to my corner of the web. On this website I share thoughts about life and career. I will also try my best to write about things I'm interested in, such as software development, data science, machine learning, interesting books, philosophy, privacy, security, etc.</p>

        <b>Contact</b>
        <ul>
          <li>Matrix: @emilnuutinen:matrix.org</li>
          <li>Telegram: emilnuutinen</li>
        </ul>

        <b>This website</b>
        <p>If you find any mistakes, bugs or other inappropriateness here, leave an issue or a pull requests to the <a href='https://github.com/emilnuutinen/emilnuutinen_website'>repository</a>.</p>
      </main>
    </>
  )
}
