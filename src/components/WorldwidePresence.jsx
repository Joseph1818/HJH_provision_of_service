import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaHandshake, FaGlobe, FaCube, FaUsers } from 'react-icons/fa'

function WorldwidePresence() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    config: { mass: 1, tension: 80, friction: 26 },
  });

  const rotateGlobe = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 20000 },
  })


  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          <animated.div style={slideIn} className="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">{t('worldwidePresence')}</h2>
            <p className="mb-6">{t('worldwidePresenceContent')}</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              {t('learnMore')}
            </button>
          </animated.div>
          <div className="w-full md:w-1/2">
          <div className="mt-12 flex justify-center ">
          <animated.div style={rotateGlobe}>
  <FaGlobe className="text-[#A23731]" style={{ fontSize: '150px' }} />
</animated.div>

          </div>          </div>
        </div>
      </div>
    </section>
  );
}

export default WorldwidePresence;

