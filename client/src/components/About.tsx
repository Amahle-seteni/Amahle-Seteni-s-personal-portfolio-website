import { skills, services } from "@/lib/constants";
import { motion } from "framer-motion";
import performanceChart from "@assets/image.png";
import cloudBgImage from "@assets/BACKGROUD PIC FOR PORTFOLIO.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-zinc-800">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-zinc-600 text-lg">
            I am a Cloud Computing Associate and Office Administrator with a passion for integrating technology into business processes. With a strong foundation in office administration and hands-on experience in cloud computing, I bridge the gap between technology and business management.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            // Define background image URLs that match each service theme
            const backgroundImages = {
              "Cloud Computing": cloudBgImage,
              "Administrative Efficiency": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
              "Process Automation": "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop"
            };
            
            const backgroundImage = backgroundImages[service.title as keyof typeof backgroundImages];
            
            return (
              <div 
                key={index}
                className="relative p-8 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-2 overflow-hidden text-white"
                style={{ height: '300px' }}
              >
                {/* Background image with overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    filter: 'brightness(0.4)'
                  }}
                ></div>
                
                {/* Content with semi-transparent color overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-blue-800/70"></div>
                
                {/* Text content */}
                <div className="relative z-10">
                  <h3 className="font-heading font-semibold text-2xl mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/90">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        <div className="mt-16">
          <div className="relative p-8 rounded-xl shadow-lg max-w-4xl mx-auto mb-8 overflow-hidden">
            {/* Background image with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ 
                backgroundImage: "url(https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=800&auto=format&fit=crop)",
                filter: 'brightness(0.15)'
              }}
            ></div>
            
            {/* Content with semi-transparent color overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-primary/40"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="font-heading font-semibold text-2xl mb-6 text-white">
                My Skills
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-blue-100">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white h-2.5 rounded-full skill-bar"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative p-8 rounded-xl shadow-lg max-w-4xl mx-auto mb-8 overflow-hidden">
            {/* Background image with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ 
                backgroundImage: "url(https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=800&auto=format&fit=crop)",
                filter: 'brightness(0.15)'
              }}
            ></div>
            
            {/* Content with semi-transparent color overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-blue-800/60"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="font-heading font-semibold text-2xl mb-6 text-white">
                Performance Evaluation
              </h3>
              
              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center space-x-4 bg-white/10 p-4 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-white">90%</div>
                    <div className="text-blue-100 text-sm mt-1">Overall Score</div>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <img 
                    src={performanceChart} 
                    alt="Performance Evaluation Chart" 
                    className="w-full max-w-3xl rounded-lg border border-white/20"
                  />
                  <p className="mt-4 text-white/90 italic text-center">
                    Consistently high performer across key competency areas including technical skills, 
                    project delivery, and accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;