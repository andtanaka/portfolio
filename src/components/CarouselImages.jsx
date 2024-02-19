import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const CarouselImages = ({ photos }) => {
  return (
    <Carousel>
      {photos.map((photo) => {
        return (
          <Carousel.Item key={photo.name}>
            <Image src={photo.src} alt={photo.title} />
            <Carousel.Caption style={{ backgroundColor: 'black' }}>
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselImages;
