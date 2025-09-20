import { experiences, achievements } from "@/lib/constants";
import { Trophy, Award, Medal, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const iconComponents = {
  Award: Award,
  Certificate: FileCheck,
  Medal: Medal,
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-zinc-800">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-zinc-600 text-lg">
            My professional journey and key accomplishments in the tech industry.
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
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item pb-8">
                <div className="timeline-bullet"></div>
                <div className="pl-8">
                  <div className="flex flex-wrap justify-between items-start">
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-zinc-800">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-3 text-zinc-600">{exp.description}</p>
                  <div className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <Trophy className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                        <p className="text-zinc-600">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <h3 className="font-heading font-semibold text-2xl mb-6 text-center">
            Achievements & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = iconComponents[achievement.icon as keyof typeof iconComponents];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md border border-zinc-100"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-primary text-xl" size={20} />
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-zinc-500 text-sm">
                    {achievement.organization} • {achievement.year}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
