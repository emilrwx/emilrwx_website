import React from 'react'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

class Layout extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.menuBar}>
          <div className={styles.menuLinks}>
            <p className={styles.menuText}>
              <Link className={styles.menuLink} href='/'>
                Home
              </Link>
              &nbsp;-&nbsp;
            </p>
            <p className={styles.menuText}>
              <Link className={styles.menuLink} href='/about'>
                About
              </Link>
              &nbsp;-&nbsp;
            </p>
            <p className={styles.menuText}>
              <Link className={styles.menuLink} href='/blog'>
                Blog
              </Link>
              &nbsp;-&nbsp;
            </p>
            <p className={styles.menuText}>
              <Link className={styles.menuLink} href='/uses'>
                Uses
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <main>{children}</main>
        </div>
      </div>
    )
  }
}

export default Layout
