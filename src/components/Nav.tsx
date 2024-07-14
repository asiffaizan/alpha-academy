import Image from "next/image";
import logo from '@/utils/alpha-academy logo2.png';
import Link from "next/link";
import { Icon } from '@iconify/react';


const Nav = () => {
    return (
        <nav className="p-3 bg-[#232021] flex flex-row justify-between items-center text-slate-50 fixed w-full z-50">
            <Image
            height={150}
            width={150}
            src={logo}
            alt="logo"
            />
            <div className="flex flex-row justify-between items-center">
                <Link href='#home' className="p-2">Home</Link>
                <Link href='#mentors' className="p-2">Our Mentors</Link>
                <Link href='#courses' className="p-2">Our Courses</Link>
                <Link href='#about' className="p-2">About Us</Link>
                <Link href='#contact-us' className="p-2">Contact Us</Link>
            </div>
            <div className="flex flex-row justify-between items-center p-2">
                <Icon icon="gg:phone" />
                <div className="ml-1">+880-1308735850</div>
            </div>
        </nav>
    );
};

export default Nav;