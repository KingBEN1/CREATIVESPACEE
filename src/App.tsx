import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

// Import service pages
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import AppDevelopmentPage from './pages/services/AppDevelopmentPage';
import UiUxDesignPage from './pages/services/UiUxDesignPage';
import GraphicDesignPage from './pages/services/GraphicDesignPage';
import SeoOptimizationPage from './pages/services/SeoOptimizationPage';
import SocialMediaMarketingPage from './pages/services/SocialMediaMarketingPage';
import EmailMarketingPage from './pages/services/EmailMarketingPage';
import PpcAdvertisingPage from './pages/services/PpcAdvertisingPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/web-development" element={<WebDevelopmentPage />} />
          <Route path="services/app-development" element={<AppDevelopmentPage />} />
          <Route path="services/ui-ux-design" element={<UiUxDesignPage />} />
          <Route path="services/graphic-design" element={<GraphicDesignPage />} />
          <Route path="services/seo-optimization" element={<SeoOptimizationPage />} />
          <Route path="services/social-media-marketing" element={<SocialMediaMarketingPage />} />
          <Route path="services/email-marketing" element={<EmailMarketingPage />} />
          <Route path="services/ppc-advertising" element={<PpcAdvertisingPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;