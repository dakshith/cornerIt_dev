import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { TeamCard } from '@/components/ui/team-card';
import { AnimatedText, AnimatedTextStagger } from '@/components/ui/animated-text';
import { teamMembers, companyInformation } from '@/lib/constants';
import { Calendar, Award, Users, Briefcase, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 hero-gradient overflow-hidden">
        {/* Abstract animated background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute top-[-10%] right-[5%] w-[60%] h-[60%] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #2A1AD8 0%, transparent 70%)' }}
            animate={{ 
              scale: [1, 1.05, 1],
              x: [0, 10, 0],
              y: [0, -10, 0] 
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10
            }}
          />
          <motion.div 
            className="absolute bottom-[-20%] left-[10%] w-[70%] h-[70%] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #7231EC 0%, transparent 70%)' }}
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -15, 0],
              y: [0, 15, 0] 
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: 12
            }}
          />
          <motion.div 
            className="absolute top-[30%] left-[50%] w-[40%] h-[40%] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #B94BFF 0%, transparent 60%)' }}
            animate={{ 
              scale: [1, 1.15, 1],
              x: [0, 20, 0],
              y: [0, 20, 0] 
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2A1AD8] to-[#B94BFF] mx-auto mb-6"></div>
            <p className="text-xl">
              Learn about our journey, mission, and the team driving innovation in IT solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">Our Mission & Vision</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 mb-6">
                  To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and provide competitive advantages in an ever-evolving digital landscape.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 mb-6">
                  To be the most trusted technology partner for businesses worldwide, known for our expertise, innovation, and commitment to client success.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-4">Our Values</h3>
                <ul className="text-lg text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Excellence in everything we do</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Innovation that drives results</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Integrity in all relationships</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Client-focused approach</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-primary w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-dark mb-2">
                {new Date().getFullYear() - companyInformation.founded}+
              </div>
              <p className="text-gray-600">Years of Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-dark mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-dark mb-2">30+</div>
              <p className="text-gray-600">Team Members</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-primary w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-dark mb-2">100+</div>
              <p className="text-gray-600">Happy Clients</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to becoming a leading IT solutions provider, our journey has been marked by innovation, growth, and excellence.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline items */}
            <div className="relative">
              {/* Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              {/* 2010 */}
              <div className="relative z-10 mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0"
                  >
                    <h3 className="text-xl font-bold text-gray-dark mb-2">2010</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">Company Founded</h4>
                    <p className="text-gray-600">
                      TechCore Solutions was established with a vision to transform how businesses leverage technology.
                    </p>
                  </motion.div>
                  
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white"></div>
                  
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>
              
              {/* 2013 */}
              <div className="relative z-10 mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white"></div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 md:pl-12 mb-4 md:mb-0"
                  >
                    <h3 className="text-xl font-bold text-gray-dark mb-2">2013</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">Expansion to Cloud Services</h4>
                    <p className="text-gray-600">
                      Launched our cloud services division, helping clients transition to cloud-based infrastructure.
                    </p>
                  </motion.div>
                </div>
              </div>
              
              {/* 2016 */}
              <div className="relative z-10 mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0"
                  >
                    <h3 className="text-xl font-bold text-gray-dark mb-2">2016</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">Cybersecurity Focus</h4>
                    <p className="text-gray-600">
                      Expanded our services to include comprehensive cybersecurity solutions for businesses of all sizes.
                    </p>
                  </motion.div>
                  
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white"></div>
                  
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>
              
              {/* 2020 */}
              <div className="relative z-10 mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white"></div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 md:pl-12 mb-4 md:mb-0"
                  >
                    <h3 className="text-xl font-bold text-gray-dark mb-2">2020</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">Remote Work Solutions</h4>
                    <p className="text-gray-600">
                      Developed specialized solutions to help businesses adapt to remote work environments during global challenges.
                    </p>
                  </motion.div>
                </div>
              </div>
              
              {/* Present */}
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0"
                  >
                    <h3 className="text-xl font-bold text-gray-dark mb-2">Today</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">Industry Leader</h4>
                    <p className="text-gray-600">
                      Now recognized as an industry leader, providing innovative IT solutions to clients worldwide.
                    </p>
                  </motion.div>
                  
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-secondary border-4 border-white"></div>
                  
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our talented team of IT experts brings diverse skills and experience to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard 
                key={member.id} 
                member={member} 
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Join Our Growing Team</h2>
              <p className="text-white/80">We're always looking for talented individuals to join our team.</p>
            </div>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 rounded-full"
            >
              <Link href="/contact">
                View Careers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
