import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareTwitter,
} from 'react-icons/fa6'
import LogoDark from '../logo/logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mt-32 p-4">
      <div className="flex flex-col lg:flex-row items-center justify-between px-8">
        <LogoDark />
        <div className="flex items-center gap-2 mb-4">
          <Link className="text-2xl" href={''}>
            <FaFacebook />
          </Link>
          <Link className="text-2xl" href={''}>
            <FaInstagram />
          </Link>
          <Link className="text-2xl" href={''}>
            <FaSquareTwitter />
          </Link>
          <Link className="text-2xl" href={''}>
            <FaLinkedin />
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-8 space-y-5 lg:space-y-0 text-sm text-MyColor02 border-t border-MyColor02 p-3">
        <p>2023 DosSantosDev. All right reserved.</p>
        <Link href={''}>Privacy Policy</Link>
        <Link href={''}>Terms of Service</Link>
        <Link href={''}>Cookies Settings</Link>
      </div>
    </footer>
  )
}

export default Footer
