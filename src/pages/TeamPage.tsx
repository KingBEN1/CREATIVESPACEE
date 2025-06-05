import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail, ChevronRight } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import AnimatedSection from '../components/shared/AnimatedSection';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Alex has over 15 years of experience in digital marketing and web development. He founded Creative Space with a vision to help businesses transform their digital presence.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "alex@creativespace.com"
    }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Creative Director",
    bio: "Sarah leads our design team with her innovative approach and eye for detail. She has worked with major brands and brings a wealth of experience in UI/UX and brand identity.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "sarah@creativespace.com"
    }
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Lead Developer",
    bio: "Marcus is an expert in full-stack development with a focus on creating scalable and performant web applications. He leads our development team with a passion for clean code.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      email: "marcus@creativespace.com"
    }
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Digital Marketing Manager",
    bio: "Emma specializes in creating data-driven marketing strategies that deliver results. She has a background in SEO and social media marketing for B2B and B2C clients.",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "emma@creativespace.com"
    }
  },
  {
    id: 5,
    name: "David Kim",
    role: "UI/UX Designer",
    bio: "David is passionate about creating user-centered designs that combine aesthetics with functionality. He has a background in psychology which informs his approach to UX.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "david@creativespace.com"
    }
  },
  {
    id: 6,
    name: "Olivia Taylor",
    role: "Content Strategist",
    bio: "Olivia crafts compelling content strategies that tell brand stories and engage audiences. She has experience in journalism and content marketing across various industries.",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "olivia@creativespace.com"
    }
  }
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <AnimatedSection className="h-full">
      <div 
        className="group h-full bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-soft-xl hover:shadow-lg dark:shadow-none dark:border dark:border-dark-700 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-80 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex gap-3 mb-4">
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter} 
                    className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors duration-300"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin} 
                    className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {member.social.email && (
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
          <motion.img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover object-center"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {member.name}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
            {member.role}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {member.bio}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Creative Space was founded with a vision to help businesses transform their digital presence."
  },
  {
    year: "2017",
    title: "Expanded Services",
    description: "Added mobile app development and UI/UX design services to meet growing client demands."
  },
  {
    year: "2019",
    title: "Office Expansion",
    description: "Moved to a larger office and doubled our team size to serve more clients."
  },
  {
    year: "2021",
    title: "International Clients",
    description: "Began working with international clients, expanding our reach to Europe and Asia."
  },
  {
    year: "2023",
    title: "Award Recognition",
    description: "Received multiple industry awards for our innovative work in web development and design."
  }
];

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | Creative Space</title>
        <meta name="description" content="Meet our talented team of digital experts including designers, developers, and marketing specialists." />
      </Helmet>
      
      <PageHeader
        title="Meet Our Team"
        description="We are a talented group of creatives, strategists, and technologists passionate about creating exceptional digital experiences."
      />
      
      {/* Team Grid */}
      <section className="py-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Creative Space was founded in 2015 with a simple mission: to help businesses leverage the power of digital to grow and succeed. What started as a small team of passionate digital enthusiasts has grown into a full-service agency serving clients around the world.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We believe in the power of creativity, technology, and strategy coming together to create exceptional digital experiences. Our team is made up of specialists across various disciplines, but we all share a common goal: to deliver results that exceed our clients' expectations.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Creative Space Team" 
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Company Timeline */}
      <section className="py-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Key milestones in our company's history
            </p>
          </AnimatedSection>
          
          <div className="relative max-w-4xl mx-auto mt-16">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-900 md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            {milestones.map((milestone, index) => (
              <AnimatedSection
                key={milestone.year}
                delay={index * 0.1}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? '-right-4 md:right-0 md:-translate-x-1/2 md:-translate-y-1/2' : '-left-4 md:left-0 md:translate-x-1/2 md:-translate-y-1/2'
                } md:left-1/2 w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center z-10`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Timeline content */}
                <div className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-soft-xl dark:shadow-none dark:border dark:border-dark-700">
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;