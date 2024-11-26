import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
    <div className="container mx-auto flex justify-between items-center">
      <img 
        src="/public/Logo.png" 
        alt="Logo" 
        className="h-12"  // Adjust the height of the logo
      />
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-gray-300">{t('home')}</Link>
        <Link to="/worldwide-presence" className="hover:text-gray-300">{t('worldwidePresence')}</Link>
        <Link to="/contacts" className="hover:text-gray-300">{t('contacts')}</Link>
        <div className="relative">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </nav>
  
  
  );
}

export default Navbar;

