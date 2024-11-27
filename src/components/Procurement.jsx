import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function Procurement() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(50px)',
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <img src="/HJH_PIC6.jpg" alt="Procurement" className="rounded-lg shadow-lg" />
          </div>
          <animated.div style={slideIn} className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-4">{t('procurement')}</h2>
            <p className="text-xl mb-6">{t('procurementSubtitle')}</p>
            <p className="mb-6">{t('procurementContent')}</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              {t('learnMore')}
            </button>
          </animated.div>
        </div>
      </div>
    </section>
  );
}

export default Procurement;

