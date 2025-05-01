import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Cloud, CloudUpload, CloudOff, CloudCog, CloudRain } from 'lucide-react';

export default function CloudServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 hero-gradient">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Cloud Services background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Cloud Services</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl">
              Seamless cloud migration, management, and optimization services for enhanced scalability and efficiency.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">Accelerate Your Business with Cloud Solutions</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-6">
                The cloud offers unprecedented flexibility, scalability, and efficiency for businesses of all sizes. At TechCore Solutions, we guide you through every stage of your cloud journey, from initial assessment and strategy to migration, optimization, and ongoing management.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our certified cloud experts work with leading platforms including AWS, Microsoft Azure, and Google Cloud to deliver tailored solutions that meet your specific business requirements while optimizing costs and performance.
              </p>
              
              <Button
                asChild
                className="bg-primary hover:bg-primary-dark text-white rounded-full"
              >
                <Link href="/contact">Explore Cloud Solutions</Link>
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cloud computing" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our Cloud Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions to transform your business operations and drive innovation.
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
                    <CloudCog className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Cloud Strategy & Consulting</h3>
                  <p className="text-gray-600 mb-4">
                    Expert guidance to help you develop and implement the optimal cloud strategy for your business:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Cloud readiness assessment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Cloud strategy development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Platform selection (AWS, Azure, Google Cloud)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Cost modeling and ROI analysis</span>
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
                    <CloudUpload className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Cloud Migration</h3>
                  <p className="text-gray-600 mb-4">
                    Seamless migration of your applications, data, and infrastructure to the cloud:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Workload assessment and planning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Lift and shift, re-platform, or refactor approaches</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Data migration and validation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Minimal disruption migration strategies</span>
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
                    <Cloud className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Cloud Management & Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    Ongoing management and optimization to maximize the value of your cloud investments:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>24/7 cloud infrastructure monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Cost optimization and resource management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Performance tuning and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Security and compliance management</span>
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
                    <CloudOff className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Disaster Recovery & Business Continuity</h3>
                  <p className="text-gray-600 mb-4">
                    Cloud-based solutions to ensure business continuity in the event of a disaster:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Cloud-based backup and recovery solutions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Disaster recovery planning and implementation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Recovery point objective (RPO) and recovery time objective (RTO) planning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Disaster recovery testing and validation</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Benefits of Cloud Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leverage the power of cloud computing to transform your business operations and drive growth.
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
                Reduce capital expenditures and shift to an operational expense model, paying only for the resources you use with predictable monthly costs.
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
              <h3 className="text-xl font-bold mb-4">Scalability & Flexibility</h3>
              <p className="text-gray-600">
                Easily scale resources up or down based on demand, ensuring optimal performance during peak periods without overprovisioning.
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
              <h3 className="text-xl font-bold mb-4">Enhanced Security</h3>
              <p className="text-gray-600">
                Benefit from enterprise-grade security features and compliance certifications that would be cost-prohibitive to implement on-premises.
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
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Financial Services Firm Cloud Migration</h3>
              <p className="text-lg text-gray-600 mb-6">
                A growing financial services firm needed to modernize their infrastructure to support business expansion while maintaining strict security and compliance requirements. TechCore Solutions designed and implemented a comprehensive cloud migration strategy that included:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Hybrid cloud architecture with AWS for public-facing applications and secure private cloud for sensitive data</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Migration of legacy applications with minimal business disruption</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Implementation of advanced security controls and compliance monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Cloud cost optimization framework with continuous monitoring</span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-gray-dark">
                Result: 35% reduction in IT costs, 60% faster deployment of new services, and enhanced security posture with full compliance.
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
                src="https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Financial services office" 
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Harness the Power of the Cloud?</h2>
              <p className="text-white/80">Contact us today for a free cloud readiness assessment.</p>
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
