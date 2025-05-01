import { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Server, 
  Cloud, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight,
  Cpu,
  Code,
  Database,
  Network,
  Settings,
  Smartphone,
  Monitor,
  HardDrive
} from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  delay?: number;
}

export const ServiceCard: FC<ServiceCardProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  color, 
  delay = 0 
}) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    server: <Server className="text-white text-5xl" />,
    cloud: <Cloud className="text-white text-5xl" />,
    comments: <MessageSquare className="text-white text-5xl" />,
    'shield-check': <ShieldCheck className="text-white text-5xl" />,
    cpu: <Cpu className="text-white text-5xl" />,
    code: <Code className="text-white text-5xl" />,
    database: <Database className="text-white text-5xl" />,
    network: <Network className="text-white text-5xl" />,
    settings: <Settings className="text-white text-5xl" />,
    smartphone: <Smartphone className="text-white text-5xl" />,
    monitor: <Monitor className="text-white text-5xl" />,
    'hard-drive': <HardDrive className="text-white text-5xl" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3 }
      }}
      className="service-card"
    >
      <Card className="glass-morphism overflow-hidden h-full border border-white/20 backdrop-blur-sm">
        <div className={`h-48 bg-gradient-to-r from-[#2A1AD8] via-[#7231EC] to-[#B94BFF] flex items-center justify-center overflow-hidden relative`}>
          {/* Animated background elements */}
          <motion.div 
            className="absolute w-56 h-56 rounded-full bg-white/5 backdrop-blur-sm top-[-50%] left-[-20%]"
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div 
            className="absolute w-40 h-40 rounded-full bg-white/5 backdrop-blur-sm bottom-[-30%] right-[-10%]"
            animate={{
              y: [0, -15, 0],
              x: [0, -10, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          
          {/* Icon container */}
          <motion.div 
            className="relative z-10 p-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/30"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ 
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)'
            }}
          >
            {iconMap[icon] || <Server className="text-white text-5xl" />}
          </motion.div>
        </div>
        <CardContent className="p-6 relative">
          {/* Subtle background accent */}
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-5" 
               style={{ background: 'radial-gradient(circle, #7231EC 0%, transparent 70%)' }}></div>
               
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#2A1AD8] to-[#B94BFF] text-transparent bg-clip-text relative z-10">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-5 relative z-10">{description}</p>
          
          <div className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={`/services/${id}`} className="glossy-button inline-flex items-center justify-center text-sm">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
