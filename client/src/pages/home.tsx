import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AnimatedText, AnimatedTextStagger } from '@/components/ui/animated-text';
import { ServiceCard } from '@/components/ui/service-card';
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel';
import { services, testimonials } from '@/lib/constants';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, don't render animations
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-24 lg:pt-0">
        <div className="hero-gradient min-h-screen flex items-center overflow-hidden relative">
          {/* Dynamic background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-20" 
                 style={{ background: 'radial-gradient(circle, #2A1AD8 0%, transparent 70%)' }}></div>
            <div className="absolute bottom-[-30%] right-[-10%] w-[80%] h-[80%] rounded-full opacity-20" 
                 style={{ background: 'radial-gradient(circle, #7231EC 0%, transparent 70%)' }}></div>
            <div className="absolute top-[40%] right-[20%] w-[40%] h-[40%] rounded-full opacity-20" 
                 style={{ background: 'radial-gradient(circle, #B94BFF 0%, transparent 70%)' }}></div>
          </div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNDUiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIyOCAwIDIuNDQuMTM0IDMuNi4zOTd2LTcuODAxQzM4LjQ0IDEwLjIgMzcuMjI4IDEwIDM2IDEwYy0xMS4wNDYgMC0yMCA4Ljk1NC0yMCAyMHM4Ljk1NCAyMCAyMCAyMGMxLjIyOCAwIDIuNDQtLjEzNCAzLjYtLjM5N3Y3LjgwMUMzOC40NCA0OS44IDM3LjIyOCA1MCAzNiA1MGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjBzOC45NTQtMjAgMjAtMjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] 
               opacity-80"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white lg:text-left text-center">
                <div className="animated-text mb-8">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 block"
                  >
                    Cornerstone IT Solutions
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-xl md:text-2xl lg:text-3xl font-light mb-6 block"
                  >
                    Building Your Digital Foundation
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-lg md:text-xl block"
                  >
                    Comprehensive IT solutions for businesses of all sizes
                  </motion.span>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="flex flex-col sm:flex-row lg:justify-start justify-center gap-4 mt-8"
                >
                  <Button
                    asChild
                    size="lg"
                    className="glossy-button"
                  >
                    <Link href="#services">Our Services</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-full"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-lg h-[450px] flex items-center justify-center">
                  {/* Abstract background blobs */}
                  <motion.div 
                    className="absolute top-0 left-10 w-72 h-72 rounded-full opacity-70"
                    style={{ background: 'linear-gradient(to right, #2A1AD8, #4E2AE2)' }}
                    animate={{ 
                      x: [0, 10, 0],
                      y: [0, 15, 0],
                      scale: [1, 1.05, 1] 
                    }}
                    transition={{ 
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 8
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-10 w-60 h-60 rounded-full opacity-70"
                    style={{ background: 'linear-gradient(to right, #7231EC, #953DF5)' }}
                    animate={{ 
                      x: [0, -15, 0],
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 7
                    }}
                  />
                  <motion.div 
                    className="absolute top-1/2 right-1/2 transform translate-x-1/4 -translate-y-1/4 w-48 h-48 rounded-full opacity-70"
                    style={{ background: 'linear-gradient(to right, #953DF5, #B94BFF)' }}
                    animate={{ 
                      x: [0, 20, 0],
                      y: [0, -20, 0],
                      scale: [1, 1.07, 1] 
                    }}
                    transition={{ 
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 9
                    }}
                  />
                  
                  {/* Glass card overlay */}
                  <div className="absolute inset-0 backdrop-blur-[80px] z-10"></div>
                  
                  {/* Floating elements */}
                  <div className="relative z-20 w-full h-full flex items-center justify-center">
                    <motion.div 
                      className="glass-morphism p-8 rounded-2xl text-center flex flex-col items-center justify-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ 
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 4
                      }}
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#2A1AD8] to-[#7231EC] mb-5 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">Modern IT Solutions</h3>
                      <p className="text-white/80 mb-4">Transforming businesses through technology</p>
                      <div className="flex space-x-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-sm">Cloud</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-sm">Security</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-sm">Data</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Who We Are</h2>
            <div className="title-underline-center"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cornerstone IT Solutions is a leading IT services company helping businesses navigate digital transformation with cutting-edge solutions tailored to their unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glass-morphism p-8 text-center transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                    >
                      <svg className="text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Innovative Approach</h3>
                  <p className="text-gray-600">
                    We utilize the latest technologies and methodologies to provide innovative solutions that drive business growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="glass-morphism p-8 text-center transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                    >
                      <svg className="text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Expert Team</h3>
                  <p className="text-gray-600">
                    Our certified professionals bring years of industry expertise to deliver exceptional results for your business.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="glass-morphism p-8 text-center transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-dark via-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                    >
                      <svg className="text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Reliable Support</h3>
                  <p className="text-gray-600">
                    We provide ongoing technical support and maintenance to ensure your systems operate at peak performance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our Services</h2>
            <div className="title-underline-center"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to optimize your business operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                delay={0.2 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">What Our Clients Say</h2>
            <div className="title-underline-center"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from businesses that have transformed their operations with our solutions.
            </p>
          </div>

          <div className="relative">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">About Cornerstone IT Solutions</h2>
              <div className="title-underline"></div>
              <p className="text-lg text-gray-600 mb-6">
                Founded in December 2022, Cornerstone IT Solutions Private Limited is registered at ROC Hyderabad and specializes in comprehensive IT services, website maintenance, multimedia presentations, and custom solutions for businesses.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in building strong digital foundations for our clients, providing innovative technology solutions that drive growth and efficiency in an increasingly competitive marketplace.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white" />
                  </div>
                  <span className="font-medium">Enterprise Solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white" />
                  </div>
                  <span className="font-medium">Cloud Expertise</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-dark to-primary rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white" />
                  </div>
                  <span className="font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white" />
                  </div>
                  <span className="font-medium">Security Focus</span>
                </div>
              </div>
              
              <Button
                asChild
                className="glossy-button"
              >
                <Link href="/contact">Let's Work Together</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="glass-morphism p-3 rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team meeting" 
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold mb-2">2022</div>
                <div className="text-sm uppercase tracking-wider">Founded in Hyderabad</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glossy-card bg-white/10 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-between p-8">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready to Transform Your Business?</h2>
                <p className="text-white/80">Get in touch today for a free consultation.</p>
              </div>
              <Button
                asChild
                size="lg"
                className="glossy-button"
              >
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
