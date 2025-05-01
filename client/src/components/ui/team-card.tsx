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
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A1AD8]/30 to-[#B94BFF]/30 z-10 opacity-40"></div>
            <img 
              src={member.image}
              alt={member.name} 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="social-icons absolute inset-0 bg-gradient-to-r from-[#2A1AD8]/70 via-[#7231EC]/70 to-[#B94BFF]/70 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 backdrop-blur-sm z-20">
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
        <div className="p-6 text-center relative">
          {/* Subtle background accent */}
          <div className="absolute -top-10 right-0 w-20 h-20 rounded-full opacity-5" 
               style={{ background: 'radial-gradient(circle, #B94BFF 0%, transparent 70%)' }}></div>
               
          <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-[#2A1AD8] to-[#B94BFF] text-transparent bg-clip-text relative z-10">{member.name}</h3>
          <div className="inline-block bg-gradient-to-r from-[#2A1AD8]/10 via-[#7231EC]/10 to-[#B94BFF]/10 px-3 py-1 rounded-full mb-3 relative z-10">
            <p className="font-medium bg-gradient-to-r from-[#4E2AE2] to-[#953DF5] text-transparent bg-clip-text">{member.role}</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 relative z-10">{member.description}</p>
        </div>
      </Card>
      
      {/* Adding hover style via CSS */}
    </motion.div>
  );
};
