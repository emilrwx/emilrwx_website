import Head from 'next/head'

export default function About () {
  return (
    <>
      <Head>
        <title>Now</title>
      </Head>
      <div>
        <h1>Now</h1>
        <p>This page is inspired by <a href='https://sive.rs/nowff'>Dereks Sivers'</a> now page.</p>

        <h2>Learning</h2>
        <p>I start my Computer Science Master's in September.</p>
        <p>Meanwhile I'm updgrading my knoweldge on <b>Calculus, Linear Algebra, Statistics & Probability</b>. I'm also actively improving my <b>algorithm and data structures</b> skills and doing daily <b>LeetCode interview challenges</b>.
        </p>

        <h2>Building</h2>
        <p>I'm constantly updating this website and keeping my web development skills sharp that way. Latest update was a theme toggle and some styling updates.</p>
        <p>I'm also doing a research about how the COVID-19 lockdowns affected introverts in comparison to extroverts. I'm mining Reddit's introvert and extrovert subreddits for the data.</p>

        <h2>Resting</h2>
        <p>I'm also resting. I worked & studied 4 years without a single vacation. I'm charging my batteries until I start my Master's.</p>

      </div>
    </>
  )
}
