import React from 'react';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ image, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img src={image.urls.regular} alt={image.description} className={styles.image} />
      <button onClick={onClose} className={styles.closeButton}>Close</button>
    </ReactModal>
  );
};

export default ImageModal;
