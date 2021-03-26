import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isMenuOpen: false }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () { this.setState(state => ({ isMenuOpen: !state.isMenuOpen })) }
  render () {
    return (
      <div className={styles.container}>
        <div className={this.state.isMenuOpen ? styles.hidden : null}>
          <h1 className={styles.title}>
            <Link href='/'>
              Emil Nuutinen
            </Link>
          </h1>
          <h2 className={styles.description}>Data Scientist & Experimentalist.</h2>
        </div>
        <div className={`${styles.menu} ${this.state.isMenuOpen ? null : styles.hidden}`}>
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
        <div className={`${styles.burger} ${this.state.isMenuOpen ? styles.hamburgerOpen : null}`} onClick={this.handleClick}>
          <span />
          <span />
          <span />
        </div>
      </div>
    )
  }
}

export default Header
