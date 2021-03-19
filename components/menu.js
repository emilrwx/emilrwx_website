import React from 'react'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'

class Menu extends React.Component {
  render () {
    return (
      <div className={styles.menu}>
        <ul className={styles.menuLinks}>
          <li className={styles.menuText}>
            <Link className={styles.menuLink} href='/'>
                Home
            </Link>
          </li>
          <li className={styles.menuText}>
            <Link href='/about'>
                About
            </Link>
          </li>
          <li className={styles.menuText}>
            <Link href='/blog'>
                Blog
            </Link>
          </li>
          <li className={styles.menuText}>
            <Link href='/uses'>
                Uses
            </Link>
          </li>
          <li className={styles.menuText}>
            <a href='https://github.com/emilnuutinen'>Github</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
