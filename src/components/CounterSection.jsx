import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaHandshake, FaGlobe, FaCube, FaUsers } from 'react-icons/fa';

function CounterSection() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: config.molasses,
  });

  return (
    <section ref={ref} className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <animated.div style={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CounterItem icon={<FaHandshake />} value={15} text={t('yearsOfExperience')} />
          <CounterItem icon={<FaGlobe />} value={46} text={t('globalVendors')} />
          <CounterItem icon={<FaUsers />} value={300} text={t('buyersInKeyMarkets')} />
          <CounterItem icon={<FaCube />} value={40} text={t('dedicatedAccountHandles')} />
        </animated.div>
      </div>
    </section>
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
    <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
      <div className="text-5xl text-[#a24431] mb-4">{icon}</div>
      <animated.span className="text-4xl font-bold text-gray-800">{number.to(n => n.toFixed(0))}</animated.span>
      <p className="text-xl text-gray-600 mt-2">{text}</p>
    </div>
  );
}

export default CounterSection;

