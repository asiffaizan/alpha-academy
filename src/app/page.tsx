import Nav from "@/components/Nav";
import Courses from "@/components/courses/Courses";
import Hero from "@/components/Hero";
import Mentor from "@/components/mentors/Mentor";
import Footer from "@/components/Footer";

export default function Home() {
 
  return (
    <main>
      <Nav/>
      <Hero/>
      <Mentor/>
      <Courses/>
      <Footer/>
    </main>
  );
}
