import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { companyInformation } from '@/lib/constants';

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message Sent",
        description: "Thanks for contacting us. We'll get back to you soon!",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 hero-gradient overflow-hidden">
        {/* Dynamic background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #2A1AD8 0%, transparent 70%)' }}
            animate={{ 
              scale: [1, 1.08, 1],
              x: [0, -10, 0],
              y: [0, 10, 0] 
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10
            }}
          />
          <motion.div 
            className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #7231EC 0%, transparent 70%)' }}
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 15, 0],
              y: [0, 15, 0] 
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: 12
            }}
          />
          <motion.div 
            className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #B94BFF 0%, transparent 60%)' }}
            animate={{ 
              scale: [1, 1.15, 1],
              x: [0, -20, 0],
              y: [0, -20, 0] 
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8
            }}
          />
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCUiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIyOCAwIDIuNDQuMTM0IDMuNi4zOTd2LTcuODAxQzM4LjQ0IDEwLjIgMzcuMjI4IDEwIDM2IDEwYy0xMS4wNDYgMC0yMCA4Ljk1NC0yMCAyMHM4Ljk1NCAyMCAyMCAyMGMxLjIyOCAwIDIuNDQtLjEzNCAzLjYtLjM5N3Y3LjgwMUMzOC40NCA0OS44IDM3LjIyOCA1MCAzNiA1MGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjBzOC45NTQtMjAgMjAtMjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] 
             opacity-50"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2A1AD8] to-[#B94BFF] mx-auto mb-6"></div>
            <p className="text-xl">
              Reach out to us for any questions, concerns, or to discuss your IT needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our services or want to discuss your project? Contact us today and our team will get back to you promptly.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-gray-600">
                      {companyInformation.address.street}<br />
                      {companyInformation.address.city}, {companyInformation.address.state} {companyInformation.address.zip}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-gray-600">{companyInformation.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-gray-600">{companyInformation.contact.email}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href={companyInformation.social.facebook} 
                    className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={20} />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a 
                    href={companyInformation.social.twitter} 
                    className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a 
                    href={companyInformation.social.linkedin} 
                    className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a 
                    href={companyInformation.social.instagram} 
                    className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-morphism p-8 relative overflow-hidden">
                {/* Subtle gradient orbs in background */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#2A1AD8]/10 to-[#4E2AE2]/10 blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#7231EC]/10 to-[#953DF5]/10 blur-2xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#2A1AD8] to-[#B94BFF] text-transparent bg-clip-text">
                    Send Us a Message
                  </h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-gray-700 font-medium mb-2">Your Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="John Doe"
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
                            <FormLabel className="block text-gray-700 font-medium mb-2">Your Email</FormLabel>
                            <FormControl>
                              <Input 
                                {...field}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="john@example.com"
                                type="email"
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
                            <FormLabel className="block text-gray-700 font-medium mb-2">Subject</FormLabel>
                            <FormControl>
                              <Input 
                                {...field}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Service Inquiry"
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
                            <FormLabel className="block text-gray-700 font-medium mb-2">Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field}
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Please describe how we can help you..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full glossy-button"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="h-96 w-full bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.471215600542!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
          className="absolute inset-0 w-full h-full" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and how we can help your business.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="glass-morphism p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">What industries do you serve?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide IT services to a wide range of industries including healthcare, finance, manufacturing, education, retail, and professional services. Our solutions are tailored to address the specific challenges and requirements of each industry.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="glass-morphism p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Do you offer support for remote teams?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we specialize in providing IT solutions for remote and hybrid work environments. Our services include secure remote access solutions, cloud collaboration tools, virtual desktop infrastructure, and security measures specifically designed for distributed teams.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="glass-morphism p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">How quickly can you respond to IT emergencies?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our emergency response time depends on your service level agreement (SLA), but we typically respond to critical issues within 1 hour or less. We offer 24/7 support options for businesses that require around-the-clock monitoring and assistance.
                </p>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="glass-morphism p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">What is the typical process for starting a new project?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We begin with an initial consultation to understand your business needs and objectives. Then, we conduct a detailed assessment of your current systems and requirements. Based on this analysis, we develop a proposal with recommendations, timeline, and pricing. Once approved, we move forward with implementation, followed by thorough testing and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glossy-card bg-white/10 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-between p-8">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready to Get Started?</h2>
                <p className="text-white/80">Schedule a free consultation with our team today.</p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="glossy-button"
                onClick={() => {
                  const element = document.querySelector('form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
