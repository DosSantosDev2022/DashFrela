'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const LogoDark = () => {
  return (
    <Image
      width={150}
      height={50}
      src={'/Logo-Dark.svg'}
      alt="Logo Dark DashFrela"
    />
  )
}

const LogoLight = () => {
  return (
    <Image
      width={150}
      height={50}
      src={'/Logo-White.svg'}
      alt="Logo Light DashFrela"
    />
  )
}

const Logo = () => {
  const { theme } = useTheme()
  console.log(theme)
  const LogoComponent = theme === 'dark' ? LogoLight : LogoDark

  return <LogoComponent />
}

export default Logo
