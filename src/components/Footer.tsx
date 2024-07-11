import Image from "next/image";
import Link from "next/link";
import logo from '@/utils/alpha-academy logo.png';
import Palestine from '@/utils/palestine.png';

function Footer() {
  return (
    <div id="contact-us" className="p-3 bg-[#232021] text-white text-center">
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
      <div className="flex flex-row text-center justify-center">
        <h1><b>we stand with palestine &nbsp;</b></h1>
        <Image
          height={60}
          width={60}
          src={Palestine}
          alt="Palestine"
        />
      </div>
      <div className="text-[#FBA628]">
        <p><b>01537144364, 017</b></p>
      </div>
    </div>
  )
}

export default Footer
