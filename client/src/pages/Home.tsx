import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    // Set page title and description
    document.title = "Amahle Seteni | Professional Portfolio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional portfolio of Amahle Seteni, a Cloud Computing Associate and Office Administrator specializing in integrating technology into business processes. View my projects, education, and achievements."
      );
    }
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
