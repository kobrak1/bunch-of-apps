import { useState } from "react";
import "./ImageCarousel.scss";

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "https://i.pinimg.com/564x/44/1a/da/441ada6a279071462dd6498089902604.jpg",
    "https://i.pinimg.com/564x/cf/87/38/cf8738ebadc0c2ddfded3002b07b81d9.jpg",
    "https://i.pinimg.com/564x/92/f1/b4/92f1b40ab08aeac3da07b372c3775c4b.jpg",
    "https://i.pinimg.com/564x/03/31/c0/0331c0eeb78bc154453efc6e70c43b8d.jpg",
    "https://i.pinimg.com/564x/f2/07/c2/f207c2ae9fde3450108df3695b645953.jpg",
    "https://i.pinimg.com/564x/78/5e/be/785ebe4752d36420997ea6bcfedf89c0.jpg",
    "https://i.pinimg.com/564x/74/5b/c0/745bc0a0edf541882a92579ad0d6e926.jpg",
    "https://i.pinimg.com/564x/a7/8d/a9/a78da902fc9055a2b0e0e5041da2b8a4.jpg",
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
