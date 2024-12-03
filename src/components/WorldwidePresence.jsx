import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';

function WorldwidePresence() {
  const { t } = useTranslation();

  return (
    <section id="worldwide-presence" className="py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">{t('worldwidePresence')}</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">{t('worldwidePresenceContent')}</p>
            <Link
              to="/worldwide-presence"
              className="inline-block bg-blue-600 text-white py-2 px-6 md:py-3 md:px-8 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300"
            >
              {t('learnMore')}
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <FaGlobe className="text-blue-600 text-7xl sm:text-9xl md:text-[15rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorldwidePresence;

