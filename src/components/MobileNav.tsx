import Image from "next/image";
import logo from '@/utils/alpha-academy logo2.png';
import { Icon } from '@iconify/react';


const MobileNav = () => {
    return (
        <nav className=" p-3 bg-[#232021] flex flex-row md:flex-row justify-between items-center text-slate-50 max-w-[100%] m-auto">
            <Image
                height={150}
                width={150}
                src={logo}
                alt="logo"
            />
            <div>
                <div className="flex flex-row justify-center items-center md:mr-20 p-5">
                    <Icon icon="gg:phone" />
                    <div className="ml-1">01308735850</div>
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;