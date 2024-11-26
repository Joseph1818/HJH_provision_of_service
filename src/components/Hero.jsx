import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

function Hero() {
  const { t } = useTranslation();

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Automatic slide every 3 seconds
    arrows: true,
    prevArrow: <button className="slick-prev">{"<"}</button>,  // Custom previous arrow
    nextArrow: <button className="slick-next">{">"}</button>,  // Custom next arrow
  };

  return (
    <div className="relative bg-blue-600 text-white py-20">
      <Slider {...sliderSettings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src="your-image-url-1.jpg"
            alt="Hero Image 1"
            className="w-full h-96 object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
            <p className="text-xl mb-8">{t('heroSubtitle')}</p>
            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-blue-100">
              {t('learnMore')}
            </button>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="relative">
          <img
            src="your-image-url-2.jpg"
            alt="Hero Image 2"
            className="w-full h-96 object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
            <p className="text-xl mb-8">{t('heroSubtitle')}</p>
            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-blue-100">
              {t('learnMore')}
            </button>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default Hero;
