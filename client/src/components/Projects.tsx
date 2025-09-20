import { projects } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-zinc-800">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-zinc-600 text-lg">
            Here are some of my recent projects that showcase my skills and expertise in web and mobile development.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card bg-white rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-heading font-semibold text-xl text-zinc-800">
                    {project.title}
                  </h3>
                  <span 
                    className={`
                      px-2 py-1 rounded-full text-xs font-medium 
                      ${project.category === 'Management' ? 'bg-blue-100 text-blue-700' : 
                        project.category === 'Project Management' ? 'bg-purple-100 text-purple-700' : 
                        'bg-green-100 text-green-700'}
                    `}
                  >
                    {project.category}
                  </span>
                </div>
                <p className="text-zinc-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.demoLink}
                    className="text-primary hover:text-primary/80 flex items-center transition-colors duration-300"
                  >
                    <Eye size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-zinc-500 hover:text-zinc-600 flex items-center transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button className="inline-flex items-center px-6 py-6 h-auto bg-primary hover:bg-primary/90 text-white">
            <span>View All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
