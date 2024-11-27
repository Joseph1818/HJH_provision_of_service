'use client'

import { useTranslation } from 'react-i18next'
import { useSpring, animated, config } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import { FaHandshake, FaGlobe, FaCube, FaUsers } from 'react-icons/fa'

function CounterSection() {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: config.molasses,
  })

  const rotateGlobe = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 20000 },
  })

  return (
    <section ref={ref} className="bg-gradient-to-b from-gray-50 to-gray-100 py-24">
      <div className="container mx-auto px-4">
        <animated.div style={fadeIn} className="bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CounterItem 
              icon={<FaHandshake className="text-5xl" />} 
              value={15} 
              text={t('yearsOfExperience')} 
            />
            <CounterItem 
              icon={<FaGlobe className="text-5xl" />} 
              value={46} 
              text={t('globalVendors')} 
            />
            <CounterItem 
              icon={<FaUsers className="text-5xl" />} 
              value={300} 
              text={t('buyersInKeyMarkets')} 
            />
            <CounterItem 
              icon={<FaCube className="text-5xl" />} 
              value={40} 
              text={t('dedicatedAccountHandles')} 
            />
          </div>
          {/* <div className="mt-12 flex justify-center">
            <animated.div style={rotateGlobe}>
              <FaGlobe className="text-[#A23731] text-9xl" />
            </animated.div>
          </div> */}
        </animated.div>
      </div>
    </section>
  )
}

function CounterItem({ icon, value, text }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })

  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg transition-transform hover:scale-105">
      <div className="text-[#A23731] mb-4">{icon}</div>
      <animated.span className="text-4xl font-bold text-gray-800">
        {number.to(n => n.toFixed(0))}
      </animated.span>
      <p className="text-lg mt-2 text-gray-600">{text}</p>
    </div>
  )
}

export default CounterSection