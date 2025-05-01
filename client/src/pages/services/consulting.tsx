import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, MessageSquare, Users, LineChart, Lightbulb, Target } from 'lucide-react';

export default function Consulting() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 hero-gradient">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573496546038-82f9c39f6365?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Consulting background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">IT Consulting</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl">
              Strategic IT consulting to align technology investments with your business objectives and growth plans.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">Strategic Technology Guidance</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-gray-600 mb-6">
                In today's rapidly evolving technology landscape, making the right IT decisions is critical to your business success. Our IT consulting services provide expert guidance to help you navigate complex technology choices, develop effective strategies, and maximize the value of your IT investments.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experienced consultants combines deep technical expertise with business acumen to deliver practical, actionable recommendations that drive tangible results for your organization.
              </p>
              
              <Button
                asChild
                className="bg-primary hover:bg-primary-dark text-white rounded-full"
              >
                <Link href="/contact">Schedule a Consultation</Link>
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
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="IT consulting session" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our Consulting Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions to address your most pressing technology challenges and opportunities.
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
                    <Target className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">IT Strategy & Roadmap Development</h3>
                  <p className="text-gray-600 mb-4">
                    Develop a comprehensive technology strategy aligned with your business objectives:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Current state assessment and gap analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Future state architecture design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Technology roadmap development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Budget planning and ROI analysis</span>
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
                    <LineChart className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Digital Transformation</h3>
                  <p className="text-gray-600 mb-4">
                    Guide your organization through successful digital transformation initiatives:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Digital maturity assessment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Process optimization and automation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Technology selection and implementation planning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Change management and user adoption strategies</span>
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
                    <Lightbulb className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Technology Assessment & Selection</h3>
                  <p className="text-gray-600 mb-4">
                    Objective guidance to help you select the right technologies and vendors:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Requirements gathering and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Vendor evaluation and selection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Technology proof of concept development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>Contract negotiation support</span>
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
                    <Users className="text-primary w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">IT Organization & Governance</h3>
                  <p className="text-gray-600 mb-4">
                    Optimize your IT organization structure and governance processes:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>IT organizational assessment and design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>IT governance framework development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>IT service management optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>IT performance measurement and reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our Consulting Approach</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured, collaborative approach to deliver consulting services that address your unique challenges and drive measurable results.
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
              <h3 className="text-xl font-bold mb-4">Discovery</h3>
              <p className="text-gray-600">
                We begin by understanding your business goals, challenges, and current technology landscape through in-depth interviews and analysis.
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
              <h3 className="text-xl font-bold mb-4">Assessment</h3>
              <p className="text-gray-600">
                We evaluate your current state against industry best practices and your business objectives to identify gaps and opportunities.
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
              <h3 className="text-xl font-bold mb-4">Recommendation</h3>
              <p className="text-gray-600">
                We develop tailored recommendations and an actionable roadmap with clear priorities, timelines, and expected outcomes.
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
              <h3 className="text-xl font-bold mb-4">Implementation Support</h3>
              <p className="text-gray-600">
                We provide ongoing guidance and support to help you successfully implement the recommended strategies and solutions.
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
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Healthcare Provider Digital Transformation</h3>
              <p className="text-lg text-gray-600 mb-6">
                A regional healthcare provider needed to modernize their technology infrastructure and processes to improve patient care and operational efficiency. TechCore Solutions provided comprehensive consulting services that included:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Assessment of current technology ecosystem and identification of improvement opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Development of a 3-year digital transformation roadmap</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Guidance on EHR system selection and implementation planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Redesign of IT organizational structure and governance model</span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-gray-dark">
                Result: 25% reduction in administrative costs, 40% improvement in patient satisfaction scores, and successful implementation of new EHR system on time and within budget.
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
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare consultation" 
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Transform Your Business with Strategic IT?</h2>
              <p className="text-white/80">Contact us today to schedule a free initial consultation.</p>
            </div>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 rounded-full"
            >
              <Link href="/contact">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
