import dynamic from 'next/dynamic'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const ThemeToggle = dynamic(() => import('../components/themeToggle'), {
  ssr: false
})

export default function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.menu}>
          <Link href='/'>
            Home
          </Link>
          &nbsp;-&nbsp;
          <Link href='/about'>
            About
          </Link>
          &nbsp;-&nbsp;
          <ThemeToggle />
          &nbsp;-&nbsp;
          <Link href='/blog'>
            Blog
          </Link>
          &nbsp;-&nbsp;
          <Link href='/uses'>
            Uses
          </Link>
        </div>
      </div>
    </div>
  )
}
