import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <Link href='/'>
              Emil Nuutinen
            </Link>
          </h1>
          <p className={styles.description}>Data Scientist & Experimentalist.</p>
        </div>
        <div className={styles.menu}>
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
    </div>
  )
}
