import { useTranslation } from 'react-i18next';

export function WorldwidePresence() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{t('worldwidePresence')}</h2>
      <p>{t('worldwidePresenceContent')}</p>
    </div>
  );
}

export default WorldwidePresence;

