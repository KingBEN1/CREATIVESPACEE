import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-accent-900 dark:from-primary-950 dark:to-accent-950"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-primary-400 to-transparent rounded-full blur-3xl animate-gradient-y"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-accent-400 to-transparent rounded-full blur-3xl animate-gradient-y"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Partner with us to create exceptional digital experiences that elevate your brand, engage your audience, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary-700 font-medium px-8 py-3 rounded-full transition-colors duration-300 group"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full border border-white/30 transition-colors duration-300"
              >
                View Our Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;