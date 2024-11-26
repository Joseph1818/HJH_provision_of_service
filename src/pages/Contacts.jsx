import { useTranslation } from 'react-i18next';

export function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{t('contacts')}</h2>
      <p>{t('contactsContent')}</p>
    </div>
  );
}

export default Contacts;

