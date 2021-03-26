import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'


class Header extends React.Component {
  constructor (props) {
    const isBrowser = () => typeof window !== 'undefined'
    super(props)
    this.state = {
      isMenuOpen: false,
      windowWidth: isBrowser ? this.innerWidth : 500
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   }
  
   componentDidMount() {
    window.addEventListener("resize", this.handleResize);
   }
  
   componentWillUnMount() {
    window.addEventListener("resize", this.handleResize);
   } 

  handleClick () { this.setState(state => ({ isMenuOpen: !state.isMenuOpen })) }

  render () {
    const { windowWidth } = this.state
    const isMobile = windowWidth <= 750

    if (isMobile) {
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
    } else {
      return (
        <div className={styles.container}>
            <div className={styles.titleDesktop}>
              <h1 className={styles.title}>
                <Link href='/'>
                  Emil Nuutinen
                </Link>
              </h1>
              <h2 className={styles.description}>Data Scientist & Experimentalist.</h2>
            </div>
            <div className={styles.menuDesktop}>
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
          </div>
      )
    }
  }
}

export default Header
