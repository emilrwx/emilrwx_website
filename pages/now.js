import Head from 'next/head'

export default function About () {
  return (
    <>
      <Head>
        <title>Now</title>
      </Head>
      <div>
        <h1>Now</h1>
        This page is inspired by <a href='https://sive.rs/nowff'>Dereks Sivers'</a> now page.

        <h2>Learning</h2>
        <p>I graduated in December 2020. I'm currently waiting if I get to study Computer Science Master's in the University of turku. </p>
        <p>Meanwhile I'm updgrading my knoweldge on Calculus, Linear Algebra, Statistics & Probability. I'm also actively improving my algorithm and data structures skills and doing daily LeetCode interview challenges.
        </p>

        <h2>Building</h2>
        <p>I'm constantly updating this website and keeping my web development skills sharp that way. Latest update was a theme toggle and some styling updates.</p>
        <p>I'm also building a personal note taking application. It is a crossover between Vim and Bear. I'm building it with React & Electron.js.</p>

        <h2>Resting</h2>
        <p>I'm also resting. I worked & studied 4 years without a single vacation. I charging my batteries until I know more about school.</p>

      </div>
    </>
  )
}
