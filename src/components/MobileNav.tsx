import Image from "next/image";
import logo from '@/utils/alpha-academy logo2.png';
import icon from '../app/favicon.ico';
import Link from "next/link";


const MobileNav = () => {
    return (
        <nav className="p-3 bg-[#232021] flex flex-row justify-between items-center text-slate-50 max-w-[100%]">
            <Image
            height={150}
            width={150}
            src={logo}
            alt="logo"
            />
            <div className="flex flex-row justify-center items-center mr-10 md:mr-20">
                <div><Image height={30} width={30} src={icon} alt="hi"/></div>
                <div>+880-01537144364</div>
            </div>
        </nav>
    );
};

export default MobileNav;