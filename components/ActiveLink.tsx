import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { CSSProperties, FC } from 'react'

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}
interface Prosp {
  text: string
  href: string
}
export const ActiveLink: FC<Prosp> = ({ text, href }) => {
  const { asPath } = useRouter()
  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}
