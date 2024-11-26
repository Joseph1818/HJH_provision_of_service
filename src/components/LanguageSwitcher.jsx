import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <FaGlobe className="mr-2" />
          {i18n.language.split('-')[0].toUpperCase()}
        </button>
      </div>
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">English</button>
          <button onClick={() => changeLanguage('fr')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Français</button>
          <button onClick={() => changeLanguage('es')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Español</button>
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitcher;

