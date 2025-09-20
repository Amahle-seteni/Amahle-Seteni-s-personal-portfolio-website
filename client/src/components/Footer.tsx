import { personalInfo } from "@/lib/constants";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="py-10 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-2xl font-heading font-bold text-gradient">
              AS
            </a>
            <p className="text-zinc-400 mt-2">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-zinc-400 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-700 text-center text-zinc-400 text-sm">
          <p>Designed and built with passion by {personalInfo.name}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
