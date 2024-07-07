import Image from "next/image";
import logo from '@/utils/alpha-academy logo.png';
import Link from "next/link";

function Footer() {
  return (
    <div className="p-3 bg-[#232021] text-white text-center">
      <div className="flex flex-row justify-center">
        <Link href='/'>
            <Image
            height={100}
            width={100}
            src={logo}
            alt="logo"
            />
        </Link>
      </div>
      <h1><b>© Alpha Academy, Inc. 2024. All Rights Reserved</b></h1>
    </div>
  )
}

export default Footer
