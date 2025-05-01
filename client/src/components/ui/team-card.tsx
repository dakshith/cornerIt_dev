import { FC } from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { TeamMember } from '@/lib/constants';

interface TeamCardProps {
  member: TeamMember;
  delay?: number;
}

export const TeamCard: FC<TeamCardProps> = ({ member, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="team-card"
    >
      <Card className="glass-morphism overflow-hidden border border-white/20">
        <div className="relative">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 z-10 opacity-40"></div>
            <img 
              src={member.image}
              alt={member.name} 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="social-icons absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 backdrop-blur-sm z-20">
            {member.socialLinks.linkedin && (
              <motion.a 
                href={member.socialLinks.linkedin} 
                className="text-white hover:text-gray-200 p-2 bg-white/10 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Linkedin size={24} />
              </motion.a>
            )}
            {member.socialLinks.twitter && (
              <motion.a 
                href={member.socialLinks.twitter} 
                className="text-white hover:text-gray-200 p-2 bg-white/10 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Twitter size={24} />
              </motion.a>
            )}
            {member.socialLinks.email && (
              <motion.a 
                href={`mailto:${member.socialLinks.email}`}
                className="text-white hover:text-gray-200 p-2 bg-white/10 rounded-full"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail size={24} />
              </motion.a>
            )}
          </div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">{member.name}</h3>
          <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 px-3 py-1 rounded-full mb-3">
            <p className="text-gray-800 dark:text-gray-200 font-medium">{member.role}</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
        </div>
      </Card>
      
      {/* Adding hover style via CSS */}
    </motion.div>
  );
};
