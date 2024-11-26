import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaHandshake, FaGlobe, FaCube } from 'react-icons/fa';

function Home() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <animated.h1 style={fadeIn} className="text-5xl md:text-7xl font-light mb-4">
            {t('heroTitle')}
          </animated.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <img src="/images/HJH_PIC6.jpg" alt="Procurement" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-4">{t('procurement')}</h2>
              <p className="text-xl mb-6">{t('procurementSubtitle')}</p>
              <p className="mb-6">{t('procurementContent')}</p>
              <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                {t('learnMore')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <animated.div style={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CounterItem icon={<FaHandshake />} value={15} text={t('yearsOfExperience')} />
            <CounterItem icon={<FaGlobe />} value={46} text={t('globalVendors')} />
            <CounterItem icon={<FaGlobe />} value={300} text={t('buyersInKeyMarkets')} />
            <CounterItem icon={<FaCube />} value={40} text={t('dedicatedAccountHandles')} />
          </animated.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">{t('worldwidePresence')}</h2>
              <p className="mb-6">{t('worldwidePresenceContent')}</p>
              <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                {t('learnMore')}
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/HJH_PIC2.jpg" alt="Worldwide Presence" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CounterItem({ icon, value, text }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div className="text-center">
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <animated.span className="text-4xl font-bold">{number.to(n => n.toFixed(0))}</animated.span>
      <p className="text-xl">{text}</p>
    </div>
  );
}

export default Home;

