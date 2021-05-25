import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

const ThemeToggle = dynamic(() => import('../components/themeToggle'), {
  ssr: false
})

export default function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <Image className={styles.titleImage} src='/me.png' alt='me' width='64' height='64' />
          <div className={styles.titleText}>
            <h1 className={styles.title}>
              <Link href='/'>
                Emil Nuutinen
              </Link>
            </h1>
            <p className={styles.description}>Data Scientist & Experimentalist.</p>
          </div>
        </div>
        <div className={styles.menu}>
          <Link href='/'>
            Home
          </Link>
          <Link href='/about'>
            About
          </Link>
          <Link href='/blog'>
            Blog
          </Link>
          <Link href='/tech'>
            Tech
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
