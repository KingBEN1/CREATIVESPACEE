import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import CallToAction from '../components/home/CallToAction';
import FlyingElements from '../components/home/FlyingElements';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Creative Space | Digital Agency</title>
        <meta name="description" content="Creative Space is a full-service digital agency specializing in web development, app development, UI/UX design, and digital marketing services." />
      </Helmet>
      
      <FlyingElements />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <CallToAction />
    </>
  );
};

export default HomePage;