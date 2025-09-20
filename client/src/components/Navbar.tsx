import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full bg-white z-50 border-b border-dark-200 transition-shadow duration-300 ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 md:px-8 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-heading font-bold text-gradient">
          AS
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-zinc-600 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Contact Me
            </Button>
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-zinc-800 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-zinc-200 px-4 py-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-600 hover:text-primary transition-colors duration-300 py-2"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-300 text-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
