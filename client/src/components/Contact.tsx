import { useState } from "react";
import { personalInfo } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      // In a real app, we would send this data to the backend
      // await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-800 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-zinc-300 text-lg">
            I'm currently available for freelance work and open to new opportunities. Feel free to reach out if you would like to collaborate on a project or have any questions.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col lg:flex-row gap-10"
        >
          <div className="lg:w-1/2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300 font-medium">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="bg-zinc-700 text-white border-zinc-600 focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300 font-medium">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email address"
                          className="bg-zinc-700 text-white border-zinc-600 focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300 font-medium">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What is this about?"
                          className="bg-zinc-700 text-white border-zinc-600 focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300 font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          className="bg-zinc-700 text-white border-zinc-600 focus:border-primary"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 py-6 h-auto font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-zinc-700 p-8 rounded-xl h-full">
              <h3 className="font-heading font-semibold text-2xl mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-600 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-zinc-200">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-primary/80 hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-600 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-zinc-200">Phone</h4>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
                      className="text-primary/80 hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-600 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-zinc-200">Location</h4>
                    <p className="text-zinc-300">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium text-lg text-zinc-200 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zinc-600 rounded-lg flex items-center justify-center text-zinc-300 hover:text-primary hover:bg-zinc-500 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zinc-600 rounded-lg flex items-center justify-center text-zinc-300 hover:text-primary hover:bg-zinc-500 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zinc-600 rounded-lg flex items-center justify-center text-zinc-300 hover:text-primary hover:bg-zinc-500 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zinc-600 rounded-lg flex items-center justify-center text-zinc-300 hover:text-primary hover:bg-zinc-500 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
