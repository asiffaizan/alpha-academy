import Nav from "@/components/Nav";
import Courses from "@/components/courses/Courses";
import Hero from "@/components/Hero";
import Mentor from "@/components/mentors/Mentor";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import AboutUs from "@/components/AboutUs";

export default function Home() {
 
  return (
    <main>
      <div className="hidden lg:block">
        <Nav/>
      </div>
      <div className="block lg:hidden w-full">
        <MobileNav/>
      </div>
      <Hero/>
      <Mentor/>
      <AboutUs />
      <Courses/>
      <Footer/>
    </main>
  );
}
