import { education } from "@/lib/constants";
import { educationLogos } from "@/lib/education-logos";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-zinc-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-zinc-800">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-zinc-600 text-lg">
            My educational journey has equipped me with the knowledge and skills needed to excel in the tech industry.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="space-y-12 pl-8">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item pb-8">
                <div className="timeline-bullet bg-primary"></div>
                <div className="pl-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-5 border border-zinc-100">
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-4">
                      {/* Institution Logo */}
                      <div className="hidden md:block">
                        <div className="h-16 w-16 rounded-lg overflow-hidden bg-white shadow-md flex items-center justify-center p-1">
                          <img 
                            src={educationLogos[edu.institution as keyof typeof educationLogos]} 
                            alt={`${edu.institution} logo`}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Degree and Institution */}
                      <div>
                        <h3 className="font-heading font-semibold text-xl text-zinc-800">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center">
                          <p className="text-primary font-medium">{edu.institution}</p>
                          {/* Small logo for mobile */}
                          <div className="md:hidden ml-2 h-6 w-6 rounded overflow-hidden bg-white shadow-sm inline-flex items-center justify-center">
                            <img 
                              src={educationLogos[edu.institution as keyof typeof educationLogos]} 
                              alt={`${edu.institution} logo`}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="mt-3 text-zinc-600">{edu.description}</p>
                  
                  <div className="mt-4 space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                        <p className="text-zinc-600">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <a 
            href="#" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
          >
            <span>View my full credentials</span>
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
