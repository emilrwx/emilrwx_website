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
        <h1 className={styles.title}>
          <Link href='/'>
            Emil Nuutinen
          </Link>
        </h1>
        <div className={styles.menu}>
          <Link href='/'>
            Home
          </Link>
          <Link href='/blog'>
            Blog
          </Link>
          <ThemeToggle />
          <Link href='/uses'>
            Uses
          </Link>
          <Link href='/now'>
            Now
          </Link>
        </div>
      </div>
    </div>
  )
}
