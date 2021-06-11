import React from 'react'
import Header from '../components/header'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Layout (props) {
  const { children } = props

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <main className={styles.main}>
          <div className={styles.children}>
            {children}
          </div>
        </main>
        <aside className={styles.bio}>
          <Image className={styles.profile} src='/me.png' alt='me' width='200' height='200' />
          <p className={styles.name}><b>Emil Nuutinen</b></p>
          <p className={styles.description}>Data Scientist & Experimentalist</p>
          <p className={styles.explainer}><span className={styles.leader}>Location </span>Turku, Finland</p>
          <p className={styles.explainer}><span className={styles.leader}>Education </span>B.B.A. Business Information Technology, Turku University of Applied Sciences</p>
          <p className={styles.explainer}><span className={styles.leader}>Interests </span>Data Science, Machine Learning, Software Development, Privacy, Reading, Gym, Drinking too much coffee</p>
          <p className={styles.explainer}><span className={styles.leader}>This Website </span>If you find any mistakes, bugs or other inappropriateness here, leave an issue or a pull requests to the <a href='https://github.com/emilnuutinen/emilnuutinen_website'>repository</a></p>
          <p className={styles.explainer}><span className={styles.leader}>Contact </span>hello@emilnuutinen.com</p>
        </aside>
      </div>
    </div>
  )
}
