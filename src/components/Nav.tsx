import Image from "next/image";
import logo from '@/utils/alpha-academy logo2.png';
import icon from '../app/favicon.ico';
import Link from "next/link";


const Nav = () => {
    return (
        <nav className="p-3 bg-[#232021] flex flex-row justify-between items-center text-slate-50">
            <Image
            height={150}
            width={150}
            src={logo}
            alt="logo"
            />
            <div className="flex flex-row justify-between items-center">
                <Link href='#courses' className="p-2">Our Courses</Link>
                <Link href='#mentors' className="p-2">Our Mentors</Link>
                {/* <div id="courses" className="p-2">Our Courses</div>
                <div id="mentors" className="p-2">Our Mentors</div> */}
            </div>
            <div className="flex flex-row justify-between items-center p-2">
                <div><Image height={30} width={30} src={icon} alt="hi"/></div>
                <div>+880-01537144364</div>
            </div>
        </nav>
    );
};

export default Nav;