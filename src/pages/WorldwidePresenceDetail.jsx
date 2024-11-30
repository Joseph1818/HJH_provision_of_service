import React from 'react';
import { useTranslation } from 'react-i18next';

function WorldwidePresenceDetail() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">{t('worldwidePresence')}</h1>
      <p className="text-xl mb-6">{t('worldwidePresenceDetailContent')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{t('globalNetwork')}</h2>
          <p>{t('globalNetworkContent')}</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{t('localExpertise')}</h2>
          <p>{t('localExpertiseContent')}</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{t('internationalReach')}</h2>
          <p>{t('internationalReachContent')}</p>
        </div>
      </div>
    </div>
  );
}

export default WorldwidePresenceDetail;

