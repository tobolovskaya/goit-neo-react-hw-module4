import React from 'react';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} className={styles.modal}>
      <img src={image.urls.regular} alt={image.alt_description} className={styles.modalImage} />
    </ReactModal>
  );
};

export default ImageModal;
