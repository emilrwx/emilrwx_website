import React from 'react'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

class Layout extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div class='container'>
        <div class='menu'>
          <div>
            <p>
              <Link href='/'>
                Home
              </Link>
              &nbsp;-&nbsp;
            </p>
            <p>
              <Link href='/about'>
                About
              </Link>
              &nbsp;-&nbsp;
            </p>
            <p>
              <Link href='/blog'>
                Blog
              </Link>
              &nbsp;-&nbsp;
            </p>
            <p>
              <Link href='/uses'>
                Uses
              </Link>
            </p>
          </div>
        </div>
        <div class='content'>
          <main>{children}</main>
        </div>
      </div>
    )
  }
}

export default Layout
