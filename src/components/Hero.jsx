import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useTransition, useSpring, animated, config } from '@react-spring/web';

function Hero() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  const slides = [
    {
      image: '/HJH_PIC1.jpg',
      title: t('heroTitle1'),
      subtitle: t('heroSubtitle1'),
      color: '#a23731',
    },
    {
      image: '/HJH_PIC2.jpg',
      title: t('heroTitle2'),
      subtitle: t('heroSubtitle2'),
      color: '#a24531',
    },
    {
      image: '/HJH_PIC3.jpg',
      title: t('heroTitle3'),
      subtitle: t('heroSubtitle3'),
      color: '#a25331',
    },
  ];

  const handlePrevSlide = useCallback(() => {
    setIsManual(true);
    setIndex((state) => (state - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleNextSlide = useCallback(() => {
    setIsManual(true);
    setIndex((state) => (state + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isManual) {
      const timer = setInterval(() => {
        setIndex((state) => (state + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isManual, slides.length]);

  const colorAnimation = useSpring({
    backgroundColor: slides[index].color,
    config: config.molasses,
  });

  const textAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    reset: true,
    config: config.molasses,
  });

  const imageTransitions = useTransition(index, {
    key: index,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    config: config.molasses,
  });

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 flex">
        <animated.div 
          style={colorAnimation}
          className="w-1/2 relative overflow-hidden"
        >
          <animated.div 
            style={textAnimation} 
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="text-white text-center px-8">
              <h1 className="text-4xl font-bold mb-4">{slides[index].title}</h1>
              <p className="text-xl mb-8">{slides[index].subtitle}</p>
              <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
                {t('learnMore')}
              </button>
            </div>
          </animated.div>
        </animated.div>
        <div className="w-1/2 relative overflow-hidden">
          {imageTransitions((style, i) => (
            <animated.div
              style={{
                ...style,
                backgroundImage: `url(${slides[i].image})`,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              className="bg-cover bg-center"
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => {
              setIsManual(true);
              setIndex(i);
            }}
          />
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20"
        onClick={handlePrevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20"
        onClick={handleNextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default Hero;

