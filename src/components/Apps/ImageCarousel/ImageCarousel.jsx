import { useState } from "react";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "../../../public/img/img1.png",
    "../../../public/img/img2.png",
    "../../../public/img/img3.png",
    "../../../public/img/img4.png",
    "../../../public/img/img5.png",
    "../../../public/img/img6.png",
    "../../../public/img/img7.png",
    "../../../public/img/img8.png",
  ];

  // Previous button
  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  // Next button
  const nextSlide = () => {
    setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="slider">
      <div className="prevBtn" onClick={prevSlide}>
        <span className="material-symbols-outlined">navigate_before</span>
      </div>
      <div className="nextBtn" onClick={nextSlide}>
        <span className="material-symbols-outlined">navigate_next</span>
      </div>
      {images.map(
        (img, index) =>
          current === index && (
            <div className="slide" key={index}>
              <img src={images[current]} alt={`random image ${index}`} />
            </div>
          )
      )}
    </div>
  );
};

export default ImageCarousel;
