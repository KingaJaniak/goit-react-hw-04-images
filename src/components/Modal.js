import { useEffect, useRef } from 'react';
import { Overlay, Img, ModalWrapper } from './App.styled';

const Modal = ({ imageURL, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleImageClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Overlay onClick={onClose} ref={modalRef}>
      <ModalWrapper>
        <Img src={imageURL} alt="" onClick={handleImageClick} />
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;
