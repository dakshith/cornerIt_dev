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
      className="service-card"
    >
      <Card className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <div className={`h-48 ${color} flex items-center justify-center`}>
          {iconMap[icon] || <Server className="text-white text-5xl" />}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Link href={`/services/${id}`} className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};
