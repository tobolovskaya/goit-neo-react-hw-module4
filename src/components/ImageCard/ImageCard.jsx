import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.ImageCard}>
      <img
        src={image.urls.small}
        alt={image.description || 'Image'}
        onClick={() => onClick(image)}
      />
    </div>
  );
};

export default ImageCard;

