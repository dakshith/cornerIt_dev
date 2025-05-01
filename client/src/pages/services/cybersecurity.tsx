import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ShieldCheck, Lock, Eye, AlertTriangle, FileSearch } from 'lucide-react';

export default function Cybersecurity() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 hero-gradient">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Cybersecurity background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Cybersecurity</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl">
              Comprehensive security solutions to protect your data, systems, and networks from evolving threats.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">Protecting Your Digital Assets</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-6">
                In today's increasingly connected world, cybersecurity is not just an IT concern—it's a business imperative. With cyber threats growing in sophistication and frequency, organizations need comprehensive security strategies to protect their critical data and systems.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                At TechCore Solutions, we provide end-to-end cybersecurity services designed to identify vulnerabilities, protect assets, detect threats, respond to incidents, and help your business recover quickly from security events. Our approach combines cutting-edge technologies, proven methodologies, and industry expertise to deliver robust security solutions tailored to your specific needs.
              </p>
              
              <Button
                asChild
                className="bg-primary hover:bg-primary-dark text-white rounded-full"
              >
                <Link href="/contact">Secure Your Business</Link>
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
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cybersecurity operations" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our Cybersecurity Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your organization across the entire threat landscape.
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
                    <FileSearch className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Security Assessment & Testing</h3>
                  <p className="text-gray-600 mb-4">
                    Identify vulnerabilities and security gaps in your systems and applications:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Vulnerability assessments and penetration testing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Security architecture reviews</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Application security testing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Cloud security assessments</span>
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
                    <ShieldCheck className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Security Infrastructure & Controls</h3>
                  <p className="text-gray-600 mb-4">
                    Implement robust security technologies and controls to protect your digital assets:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Firewall and network security solutions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Endpoint protection and response</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Identity and access management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Email and web security</span>
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
                    <Eye className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Security Monitoring & Management</h3>
                  <p className="text-gray-600 mb-4">
                    Continuous monitoring and management to detect and respond to security threats:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Security Operations Center (SOC) services</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Security Information and Event Management (SIEM)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Threat intelligence and hunting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Vulnerability management and patching</span>
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
                    <AlertTriangle className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Incident Response & Recovery</h3>
                  <p className="text-gray-600 mb-4">
                    Rapid response and recovery capabilities to minimize the impact of security incidents:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Incident response planning and preparedness</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Breach investigation and containment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Digital forensics and evidence collection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Business continuity and disaster recovery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Why Choose Our Cybersecurity Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with TechCore Solutions for security services that deliver tangible protection and peace of mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="text-primary w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Certified Security Experts</h3>
              <p className="text-gray-600">
                Our team includes certified security professionals with extensive experience across multiple industries and security domains.
              </p>
            </motion.div>
            
            {/* Reason 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="text-primary w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Holistic Security Approach</h3>
              <p className="text-gray-600">
                We address all aspects of security—people, processes, and technology—to build comprehensive protection for your organization.
              </p>
            </motion.div>
            
            {/* Reason 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Proactive Protection</h3>
              <p className="text-gray-600">
                We focus on proactive security measures to prevent breaches before they occur, not just reacting to incidents after the fact.
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
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Financial Institution Security Transformation</h3>
              <p className="text-lg text-gray-600 mb-6">
                A regional financial institution faced increasing security challenges as they expanded their digital banking offerings. TechCore Solutions implemented a comprehensive security program that included:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>End-to-end security assessment revealing critical vulnerabilities</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Implementation of advanced endpoint protection and network security controls</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Deployment of 24/7 security monitoring and threat detection capabilities</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Development of comprehensive incident response procedures</span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-gray-dark">
                Result: 90% reduction in security incidents, successful defense against multiple attempted breaches, and full compliance with financial industry regulations.
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
                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Financial security operations" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Essential Cybersecurity Tips</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While comprehensive security requires professional solutions, here are some fundamental practices every organization should implement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tip 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Lock className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Use Strong Authentication</h3>
              <p className="text-gray-600">
                Implement multi-factor authentication (MFA) across all critical systems and applications to prevent unauthorized access.
              </p>
            </motion.div>
            
            {/* Tip 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="text-primary w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Keep Systems Updated</h3>
              <p className="text-gray-600">
                Regularly update and patch software, operating systems, and applications to protect against known vulnerabilities.
              </p>
            </motion.div>
            
            {/* Tip 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="text-primary w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Train Your Team</h3>
              <p className="text-gray-600">
                Conduct regular security awareness training to help employees recognize and avoid phishing attempts and other social engineering tactics.
              </p>
            </motion.div>
            
            {/* Tip 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="text-primary w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Backup Regularly</h3>
              <p className="text-gray-600">
                Maintain regular, tested backups of critical data following the 3-2-1 rule: three copies, two different media types, one off-site.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Enhance Your Security Posture?</h2>
              <p className="text-white/80">Contact us today for a free security assessment.</p>
            </div>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 rounded-full"
            >
              <Link href="/contact">
                Get Protected <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
