import Image from "next/image";
import Link from "next/link";
import logo from '@/utils/alpha-academy logo.png';
import Palestine from '@/utils/palestine.png';
import { Icon } from '@iconify/react';

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
      <div className="text-[#FBA628] flex flex-row justify-center items-center">
        <Icon icon="gg:phone" className="text-white text-xl" />
        <p><b>+880-1400430723, +880-1834259021</b></p>
      </div>
      <div className="text-[#FBA628] flex flex-row justify-center items-center">
        <Icon icon="material-symbols-light:mail" className="text-white text-xl" />
        <p><b>alphaacademy247@gmail.com</b></p>
      </div>
      <div className="text-[#FBA628] flex flex-row justify-center items-center">
        <Icon icon="icon-park-solid:youtube" className="text-white text-xl" />
        <p><b>Alpha Academy</b></p>
      </div>
      <div className="text-[#FBA628] flex flex-row justify-center items-center">
        <Icon icon="ri:facebook-fill" className="text-white text-xl" />
        <p><b>@AlphaAcademy25</b></p>
      </div>
    </div>
  )
}

export default Footer
