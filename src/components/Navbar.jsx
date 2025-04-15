import { Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  {
    name: 'Resources',
    href: '/resources',
    submenu: [
      { name: "FAQ's", href: '/faq' },
      { name: 'Forms', href: '/forms' },
      { name: 'Privacy & Policy', href: '/privacy-policy' },
    ],
  },
  { name: 'Contact', href: '/contact' },
  { name: 'Appointments', href: '/appointments' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu on route change
    setMobileMenuOpen(false);
    setResourcesOpen(false);
  }, [location.pathname]);

  // Handle delayed navigation
  useEffect(() => {
    if (!mobileMenuOpen && pendingNavigation) {
      navigate(pendingNavigation);
      setPendingNavigation(null);
    }
  }, [mobileMenuOpen, pendingNavigation, navigate]);

  const handleMobileNavClick = (href) => {
    setPendingNavigation(href);
    setTimeout(() => setMobileMenuOpen(false), 100); // Delay menu close
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 text-2xl font-semibold text-primary-600 transition-all duration-300 hover:text-primary-700">
           Sample Therapy          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center lg:hidden">
          <a 
            href="tel:+917387311923" 
            className="p-2 text-white bg-primary-600 rounded-full mr-3 shadow-md hover:bg-primary-700 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="p-2 text-primary-600 hover:text-primary-700 transition-colors rounded-lg hover:bg-primary-50"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <>
                  <button 
                    className="nav-link group flex items-center" 
                    onClick={() => setResourcesOpen(!resourcesOpen)}
                    onMouseEnter={() => setResourcesOpen(true)}
                    onMouseLeave={() => setResourcesOpen(false)}
                  >
                    {item.name}
                    <svg 
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${resourcesOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ${resourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    onMouseEnter={() => setResourcesOpen(true)}
                    onMouseLeave={() => setResourcesOpen(false)}
                  >
                    {item.submenu.map((subitem) => (
                      <Link 
                        key={subitem.name} 
                        to={subitem.href} 
                        className="block px-5 py-3 hover:bg-primary-50 transition-colors whitespace-nowrap" 
                        onClick={() => setResourcesOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  to={item.href} 
                  className={`nav-link ${location.pathname === item.href ? 'text-primary-600 after:w-full' : ''}`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            to="/appointments" 
            className="btn-primary"
          >
            Book Appointment
          </Link>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <motion.div 
              className="fixed inset-0 bg-black/30 backdrop-blur-sm" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div 
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="mobile-menu-header">
                <h3 className="text-xl font-semibold text-primary-700">Menu</h3>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="mobile-menu-close"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <nav className="space-y-1">
                {navigation.map((item, index) => (
                  <motion.div 
                    key={item.name} 
                    className="mobile-menu-item-container"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.submenu ? (
                      <>
                        <button 
                          className="mobile-menu-submenu-button"
                          onClick={() => setResourcesOpen(!resourcesOpen)}
                        >
                          {item.name}
                          <svg 
                            className={`w-5 h-5 transform transition-transform duration-300 ${resourcesOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {resourcesOpen && (
                            <motion.div 
                              className="mobile-menu-submenu"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.submenu.map((subitem, subIndex) => (
                                <motion.button 
                                  key={subitem.name} 
                                  className="mobile-menu-submenu-link" 
                                  onClick={() => handleMobileNavClick(subitem.href)}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIndex * 0.05 }}
                                >
                                  {subitem.name}
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link 
                        to={item.href} 
                        className={`mobile-menu-link ${location.pathname === item.href ? 'bg-primary-50 text-primary-700' : ''}`}
                        onClick={() => handleMobileNavClick(item.href)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
              
              <div className="mobile-menu-footer">
                <Link 
                  to="/appointments" 
                  className="mobile-menu-cta"
                  onClick={() => handleMobileNavClick('/appointments')}
                >
                  Book Appointment
                </Link>
                
                <div className="mobile-menu-contact">
                  <a 
                    href="tel:+919822479011" 
                    className="mobile-menu-phone"
                  >
                    <PhoneIcon className="h-5 w-5" />
                  </a>
                  <div className="text-sm text-primary-700">
                    <p>Need help?</p>
                    <p className="font-medium">+91 98224 79011</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
