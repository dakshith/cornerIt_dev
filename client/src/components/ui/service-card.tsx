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
        <div className={`h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center overflow-hidden relative`}>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div 
            className="relative z-10 p-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/30"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {iconMap[icon] || <Server className="text-white text-5xl" />}
          </motion.div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <Link href={`/services/${id}`} className="glossy-button inline-flex items-center justify-center text-sm">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};
