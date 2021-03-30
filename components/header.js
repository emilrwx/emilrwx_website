import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={styles.container}>
      <div className={`${styles.titleContainer} ${isMenuOpen ? styles.hidden : null}`}>
        <h1 className={styles.title}>
          <Link href='/'>
            Emil Nuutinen
          </Link>
        </h1>
        <h2 className={styles.description}>Data Scientist & Experimentalist.</h2>
      </div>
      <div className={`${styles.menu} ${isMenuOpen ? null : styles.hidden}`}>
        <Link className={styles.menuLink} href='/'>
          Home
        </Link>
        <Link href='/about'>
          About
        </Link>
        <Link href='/blog'>
          Blog
        </Link>
        <Link href='/uses'>
          Uses
        </Link>
        <a href='https://github.com/emilnuutinen'>Github</a>
      </div>
      <div
        className={`${styles.burger} ${isMenuOpen ? styles.hamburgerOpen : null}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
