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
      className="team-card"
    >
      <Card className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img 
            src={member.image}
            alt={member.name} 
            className="w-full h-64 object-cover"
          />
          <div className="social-icons absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300">
            {member.socialLinks.linkedin && (
              <a 
                href={member.socialLinks.linkedin} 
                className="text-white hover:text-gray-200 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            )}
            {member.socialLinks.twitter && (
              <a 
                href={member.socialLinks.twitter} 
                className="text-white hover:text-gray-200 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </a>
            )}
            {member.socialLinks.email && (
              <a 
                href={`mailto:${member.socialLinks.email}`}
                className="text-white hover:text-gray-200 text-xl"
              >
                <Mail size={24} />
              </a>
            )}
          </div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-primary mb-3">{member.role}</p>
          <p className="text-gray-600">{member.description}</p>
        </div>
      </Card>
    </motion.div>
  );
};
