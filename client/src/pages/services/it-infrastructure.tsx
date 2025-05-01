import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Server, Network, Database, HardDrive } from 'lucide-react';

export default function ITInfrastructure() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 hero-gradient">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="IT Infrastructure background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">IT Infrastructure</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl">
              Robust IT infrastructure solutions including server management, networking, and system integration.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">Building a Strong Foundation</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-6">
                Your IT infrastructure is the backbone of your business operations. At TechCore Solutions, we design, implement, and manage robust IT infrastructure solutions that provide the performance, reliability, and scalability your business needs to thrive.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're building from the ground up or optimizing existing systems, our team of certified engineers will create a tailored solution that aligns with your business goals and budget.
              </p>
              
              <Button
                asChild
                className="bg-primary hover:bg-primary-dark text-white rounded-full"
              >
                <Link href="/contact">Discuss Your Infrastructure Needs</Link>
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
                src="https://images.unsplash.com/photo-1586772002345-339f8042a777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Server room" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our IT Infrastructure Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to build, manage, and optimize your entire IT ecosystem.
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
                  <h3 className="text-xl font-bold mb-3">Server Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Design, implementation, and management of physical and virtual server environments tailored to your business needs, including:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>On-premises and cloud server deployments</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Server virtualization (VMware, Hyper-V)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Server clustering and load balancing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>High-availability configurations</span>
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
                    <Network className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Network Infrastructure</h3>
                  <p className="text-gray-600 mb-4">
                    End-to-end networking solutions that provide reliable, secure, and high-performance connectivity:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Network design and architecture</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Wired and wireless network implementation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>WAN optimization and SD-WAN solutions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Network monitoring and management</span>
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
                    <Database className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Data Storage & Management</h3>
                  <p className="text-gray-600 mb-4">
                    Storage solutions that ensure data availability, protection, and optimal performance:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>SAN and NAS solutions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Backup and disaster recovery systems</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Data archiving and compliance solutions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Storage optimization and tiering</span>
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
                    <HardDrive className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Infrastructure Monitoring & Management</h3>
                  <p className="text-gray-600 mb-4">
                    Proactive monitoring and management to ensure optimal performance and minimize downtime:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>24/7 infrastructure monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Performance optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Capacity planning and scaling</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Preventative maintenance and updates</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Why Choose Our IT Infrastructure Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with TechCore Solutions for infrastructure services that deliver tangible business benefits.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Enhanced Performance</h3>
              <p className="text-gray-600">
                Optimize your infrastructure for peak performance, reducing latency and improving user experiences across your organization.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Improved Reliability</h3>
              <p className="text-gray-600">
                Minimize downtime and disruptions with redundant systems, proactive monitoring, and rapid issue resolution protocols.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                Future-proof your business with infrastructure that can scale seamlessly as your organization grows and evolves.
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
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Manufacturing Company Infrastructure Overhaul</h3>
              <p className="text-lg text-gray-600 mb-6">
                A leading manufacturing company was struggling with aging infrastructure that was causing frequent downtime and hampering productivity. TechCore Solutions designed and implemented a comprehensive infrastructure refresh that included:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Virtualized server environment for improved resource utilization</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>High-performance network backbone with redundant connections</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Modern storage solution with automated backup systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Proactive monitoring and management platform</span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-gray-dark">
                Result: 99.99% uptime, 40% reduction in IT operational costs, and improved performance across all systems.
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
                src="https://images.unsplash.com/photo-1581092921461-7638363068dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Manufacturing facility" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-white/80">Contact us today for a free infrastructure assessment.</p>
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
