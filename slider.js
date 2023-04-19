import React, { useState, useEffect } from 'react';
import Slider1 from '../images/react.jpg';
import Slider2 from '../images/header_logo.svg';
import Slider3 from '../images/download.jpg';


function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Increment activeIndex to move to the next slide
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000); // 3000ms (3 seconds) interval for auto-slide

    return () => {
      // Clean up the timer on component unmount
      clearTimeout(timer);
    };
  }, [activeIndex]);

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className={activeIndex === 0 ? 'active' : ''}
          aria-current={activeIndex === 0}
          aria-label="Slide 1"
          onClick={() => handleSlide(0)}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          className={activeIndex === 1 ? 'active' : ''}
          aria-current={activeIndex === 1}
          aria-label="Slide 2"
          onClick={() => handleSlide(1)}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          className={activeIndex === 2 ? 'active' : ''}
          aria-current={activeIndex === 2}
          aria-label="Slide 3"
          onClick={() => handleSlide(2)}
        ></button>
      </div>
      {/* Carousel inner */}
    <div className="carousel-inner">
        {/* Carousel items */}
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img src={Slider1} className="d-block w-100" style={{ height: '450px' }} alt="..." />
          <div className="carousel-caption d-none d-md-block text-white">
            <h5>First slide label</h5>
            <p className="text-white">Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img src={Slider2} className="d-block w-100" style={{ height: '450px' }} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p className="text-white">Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img src={Slider3} className="d-block w-100" style={{ height: '450px' }} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p className="text-white">Some representative placeholder content for the third slide.</p>
          </div>
          </div>
    </div>
</div>
  );
}

export default Slider;
