import React from 'react'
import Header from '../components/header'
import styles from '../styles/Layout.module.css'

export default function Layout (props) {
  const { children } = props

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}
