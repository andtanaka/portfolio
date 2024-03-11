import styles from './CarouselImages.module.scss';
import { Carousel, Image } from 'react-bootstrap';

const CarouselImages = ({ photos }) => {
  return (
    <Carousel className={styles.carouselContainer} indicators={false}>
      {photos.map((photo) => {
        return (
          <Carousel.Item key={photo.name}>
            <div className={styles.imageContainer}>
              <Image
                src={photo.src}
                alt={photo.title}
                className={styles.image}
              />
            </div>

            {/* <Carousel.Caption style={{ backgroundColor: 'black' }}>
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </Carousel.Caption> */}
            <div className={styles.imageCaption}>
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselImages;
