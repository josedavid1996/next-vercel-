import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'
const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  }
]
export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {/* <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" /> 
      */}
      {menuItems.map((item) => {
        return <ActiveLink key={item.href} text={item.text} href={item.href} />
      })}
    </nav>
  )
}
