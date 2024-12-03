import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 w-full fixed top-0 z-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/Logo.png" 
            alt="Logo" 
            className="h-12"
          />
        </Link>
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-4" onClick={() => setIsOpen(false)}>{t('home')}</Link>
            <button 
              onClick={() => scrollToSection('worldwide-presence')} 
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-4 w-full lg:w-auto text-left bg-transparent border-none cursor-pointer"
            >
              {t('worldwidePresence')}
            </button>
            <Link to="/contacts" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300" onClick={() => setIsOpen(false)}>{t('contacts')}</Link>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;