import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function WorldwidePresence() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    config: config.molasses,
  });

  const rotateGlobe = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 20000 },
  });

  return (
    <section ref={ref} id="worldwide-presence" className="py-20 bg-gradient-to-r from-[#a24431] to-blue-50 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          <animated.div style={slideIn} className="w-full lg:w-1/2 pr-10 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold mb-6">{t('worldwidePresence')}</h2>
            <p className="text-xl mb-8">{t('worldwidePresenceContent')}</p>
            <Link 
              to="/worldwide-presence" 
              className="bg-white text-blue-700 py-3 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300"
            >
              {t('learnMore')}
            </Link>
          </animated.div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <animated.div style={rotateGlobe}>
              <FaGlobe className="text-[#a24431]" style={{ fontSize: '20rem' }} />
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorldwidePresence;

