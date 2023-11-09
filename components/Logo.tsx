import Image from "next/image"
import Favicon from '@/public/favicon/android-chrome-96x96.png'

const Logo = () => {
  return (
    <div className="flex items-center text-2xl font-bold gap-2">
      <Image
        src={Favicon}
        alt="Logo"
        className="object-cover"
        width={40}
        height={40}
      />
      Studio
    </div>
  )
}

export default Logo
