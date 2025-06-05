import { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import AnimatedSection from '../components/shared/AnimatedSection';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

const ContactPage = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState(initialFormState);
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: [
        "123 Innovation Way",
        "Creative District",
        "CA 94103, USA"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: [
        "+1 (123) 456-7890",
        "+1 (987) 654-3210"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: [
        "hello@creativespace.com",
        "info@creativespace.com"
      ]
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Contact Us | Creative Space</title>
        <meta name="description" content="Get in touch with our team to discuss your project or inquire about our services." />
      </Helmet>
      
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with our team to discuss your project or inquire about our services."
      />
      
      <section className="py-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft-xl dark:shadow-none dark:border dark:border-dark-700 p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg p-6 text-center"
                  >
                    <div className="mx-auto w-16 h-16 flex items-center justify-center bg-success-100 dark:bg-success-900/30 text-success-600 dark:text-success-400 rounded-full mb-4">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-success-800 dark:text-success-400 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-success-700 dark:text-success-300">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name
                              ? 'border-error-500 dark:border-error-700'
                              : 'border-gray-300 dark:border-dark-600'
                          } focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-700 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-error-600 dark:text-error-400">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email
                              ? 'border-error-500 dark:border-error-700'
                              : 'border-gray-300 dark:border-dark-600'
                          } focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-700 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-error-600 dark:text-error-400">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-700 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-700 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Project Discussion">Project Discussion</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Support">Support</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message
                            ? 'border-error-500 dark:border-error-700'
                            : 'border-gray-300 dark:border-dark-600'
                        } focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-700 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white`}
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-error-600 dark:text-error-400">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300 w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                            <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
            
            {/* Contact Information */}
            <div>
              <AnimatedSection delay={0.2} className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft-xl dark:shadow-none dark:border dark:border-dark-700 p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-3 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-600 dark:text-gray-400">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft-xl dark:shadow-none dark:border dark:border-dark-700 p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Office Hours
                </h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Monday - Friday</span>
                    <span className="font-medium text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Saturday</span>
                    <span className="font-medium text-gray-900 dark:text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Sunday</span>
                    <span className="font-medium text-gray-900 dark:text-white">Closed</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Visit our office in the heart of the Creative District
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-gray-200 dark:bg-dark-700 h-96 rounded-2xl overflow-hidden shadow-soft-xl dark:shadow-none dark:border dark:border-dark-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d-122.43759999999999!3d37.75769999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1683877591516!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Creative Space Office Location"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ContactPage;