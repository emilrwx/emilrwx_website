import React from 'react'
import styles from '../styles/Header.module.css'

class Header extends React.Component {
  render () {
    const { title, description } = this.props

    return (
      <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.description}>{description}</h2>
        </div>
      </>
    )
  }
}

export default Header
