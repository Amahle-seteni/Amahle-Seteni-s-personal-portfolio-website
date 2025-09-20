import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/constants";
import { GitPullRequest, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";
import ResumeGenerator from "./ResumeGenerator";
import backgroundImage from "@assets/BACKGROUD PIC FOR PORTFOLIO.png";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="pt-28 lg:pt-40 pb-20 lg:pb-32 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/40 to-white/90"></div>
      <div className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.03) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(59, 130, 246, 0.04) 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <span className="text-primary font-medium text-lg">Hello, I'm</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mt-2 leading-tight">
            {personalInfo.name}
            <span className="block text-primary">{personalInfo.role}</span>
          </h1>
          <p className="mt-6 text-zinc-700 text-lg max-w-xl">
            {personalInfo.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact">
              <Button className="px-8 py-6 h-auto bg-primary hover:bg-primary/90 text-white shadow-lg">
                Get in touch
              </Button>
            </a>
            <a href="#projects">
              <Button 
                variant="outline" 
                className="px-8 py-6 h-auto border-zinc-300 bg-white/80 text-zinc-700 hover:border-primary hover:text-primary shadow-md"
              >
                View Projects
              </Button>
            </a>
            <div className="w-full mt-4">
              <ResumeGenerator />
            </div>
          </div>
          <div className="mt-10 flex items-center space-x-6">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-primary transition-colors"
              aria-label="GitPullRequest"
            >
              <GitPullRequest size={24} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-zinc-600 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end"
        >
          <ProfileImage />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
