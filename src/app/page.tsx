import Nav from "@/components/Nav";
import Slider from "@/components/Slider";
import Mentors from "@/components/mentors/Mentors";
import Courses from "@/components/courses/Courses";
import Hero from "@/components/Hero";
import Mentor from "@/components/mentors/Mentor";

export default function Home() {
 
  return (
    <main>
      <Nav />
      <Hero />
      {/* <Slider />      */}
      <Mentor />
      <Mentors />
      <Courses />
    </main>
  );
}
