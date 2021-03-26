import React from 'react'
import styles from '../styles/Layout.module.css'

class Layout extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <main>{children}</main>
        </div>
      </div>
    )
  }
}

export default Layout
