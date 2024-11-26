import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{t('about')}</h2>
      <p>{t('aboutContent')}</p>
    </div>
  );
}

export default About;

