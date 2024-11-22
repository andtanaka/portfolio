import styles from './CarouselImages.module.scss';
import { Carousel, Image } from 'react-bootstrap';

const CarouselImages = ({ photos, display }) => {
  return (
    <Carousel className={styles.carouselContainer} indicators={false}>
      {photos.map((photo) => {
        const { desktop, mobile } = photo.src;

        return (
          <Carousel.Item key={photo.name} className={styles.itemContainer}>
            <div className={styles.captionContainer}>
              <Carousel.Caption className={styles.imageCaption}>
                <div className={styles.textCaption}>
                  <h5>{photo.title}</h5>
                  <p>{photo.description}</p>
                </div>
              </Carousel.Caption>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src={display === 'desktop' ? desktop : mobile}
                alt={photo.title}
                className={styles.image}
              />
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselImages;
