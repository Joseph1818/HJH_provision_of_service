import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('aboutUs')}</h3>
            <p>{t('footerAboutContent')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul>
              <li><Link to="/" className="hover:text-blue-400">{t('home')}</Link></li>
              <li><Link to="/worldwide-presence" className="hover:text-blue-400">{t('worldwidePresence')}</Link></li>
              <li><Link to="/contacts" className="hover:text-blue-400">{t('contacts')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactInfo')}</h3>
            <p>{t('address')}</p>
            <p>{t('phone')}</p>
            <p>{t('email')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('followUs')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-400"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-blue-400"><FaLinkedin /></a>
              <a href="#" className="text-2xl hover:text-blue-400"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

