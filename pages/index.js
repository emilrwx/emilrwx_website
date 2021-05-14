import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Emil Nuutinen</title>
      </Head>
      <main>
        <p>Hi Stranger! Welcome to my corner of the web. This website lives mainly as a sandbox for me to fiddle with different web technologies. I also try my best to blog about things I'm interested in, such as software development, data science, machine learning, privacy, etc.</p>

        <b>Contact</b>
        <ul>
          <li><a href='https://twitter.com/EmilNuutinen'>Twitter</a></li>
          <li><a href='https://github.com/emilnuutinen'>Github</a></li>
        </ul>

        <b>This website</b>
        <p>If you find any mistakes, bugs or other inappropriateness here, leave an issue or a pull requests to the <a href='https://github.com/emilnuutinen/emilnuutinen_website'>repository</a>.</p>
      </main>
    </>
  )
}
