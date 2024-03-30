import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StyledCarousel from "./styles";
import Untitled from '../../assets/Untitled.jpg';

const MyCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <StyledCarousel responsive={responsive}>
      <div style={{
        backgroundImage: `url(${Untitled})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'space',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%'
      }}>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div> 
      <div>Item 5</div>
      <div>Item 6</div> 
    </StyledCarousel>
  );
};

export default MyCarousel;
