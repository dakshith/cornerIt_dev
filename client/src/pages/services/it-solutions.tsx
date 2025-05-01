import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Server, Network, Database, HardDrive, Cpu, Code } from 'lucide-react';

export default function ITSolutions() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 hero-gradient">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="IT Solutions background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">IT Solutions</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl">
              Comprehensive technology solutions designed to optimize your business operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">Integrated IT Solutions for Your Business</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-6">
                In today's rapidly evolving business landscape, having the right IT solutions is essential for maintaining competitiveness and driving growth. At TechCore Solutions, we deliver comprehensive, integrated IT solutions that address your organization's unique challenges and help you achieve your business objectives.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experienced IT professionals works closely with you to understand your requirements, design tailored solutions, and implement them with minimal disruption to your operations. From infrastructure and networking to software development and maintenance, we provide end-to-end IT services that empower your business to thrive in the digital era.
              </p>
              
              <Button
                asChild
                className="bg-primary hover:bg-primary-dark text-white rounded-full"
              >
                <Link href="/contact">Discuss Your IT Needs</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="IT Solutions" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our Core IT Solutions</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our range of comprehensive IT solutions designed to optimize your operations and support your business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Server className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">IT Infrastructure Management</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive infrastructure solutions for optimal performance and reliability:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Server management and virtualization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Network design and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Storage solutions and data management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>24/7 monitoring and proactive maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Code className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Software Solutions & Development</h3>
                  <p className="text-gray-600 mb-4">
                    Custom software solutions to address your specific business needs:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Custom application development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Software integration and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Web and mobile application development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Quality assurance and testing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Cpu className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Enterprise Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Enterprise-grade solutions to streamline operations and enhance productivity:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>ERP system implementation and customization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>CRM solutions for improved customer management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Business intelligence and analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Workflow automation and process optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Service 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Database className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">IT Support & Maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Reliable support and maintenance services to keep your systems running smoothly:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>24/7 help desk and technical support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Preventative maintenance and updates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Problem diagnosis and resolution</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>System optimization and performance tuning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Benefits of Our IT Solutions</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with TechCore Solutions and experience tangible benefits that positively impact your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="text-primary w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cost Efficiency</h3>
              <p className="text-gray-600">
                Optimize your IT spend with solutions designed to reduce operational costs and maximize return on investment.
              </p>
            </motion.div>
            
            {/* Benefit 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="text-primary w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Enhanced Productivity</h3>
              <p className="text-gray-600">
                Empower your team with tools and systems that streamline workflows and automate repetitive tasks.
              </p>
            </motion.div>
            
            {/* Benefit 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="text-primary w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                Future-proof your business with flexible solutions that can scale and adapt as your organization grows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">Success Story</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Retail Chain Digital Transformation</h3>
              <p className="text-lg text-gray-600 mb-6">
                A growing retail chain with 25 locations was struggling with outdated systems, siloed data, and inefficient processes. TechCore Solutions implemented a comprehensive IT transformation that included:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Integrated ERP and POS system implementation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Centralized inventory management system</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Custom e-commerce platform integrated with in-store systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Business intelligence dashboard for real-time performance monitoring</span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-gray-dark">
                Result: 45% increase in operational efficiency, 30% reduction in inventory costs, and 70% improvement in customer satisfaction scores.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Retail store" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our Approach</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic, client-centered approach to deliver IT solutions that truly meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-4">Assessment</h3>
              <p className="text-gray-600">
                We thoroughly assess your current IT environment, business requirements, and objectives to identify opportunities for improvement.
              </p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">Solution Design</h3>
              <p className="text-gray-600">
                Our experts design a customized solution that addresses your specific needs, incorporating industry best practices and cutting-edge technologies.
              </p>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">Implementation</h3>
              <p className="text-gray-600">
                We implement the solution with minimal disruption to your operations, ensuring a smooth transition and proper integration with existing systems.
              </p>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide continuous monitoring, maintenance, and support to ensure optimal performance and help you maximize the value of your IT investments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Transform Your Business with Strategic IT Solutions?</h2>
              <p className="text-white/80">Contact us today to discuss how we can help optimize your technology infrastructure.</p>
            </div>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 rounded-full"
            >
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
