import { Component } from 'react';
import { ModalWrapper, Overlay, Img } from './App.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOutside = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  handleImageClick = event => {
    event.stopPropagation(); // Zapobiega propagacji kliknięcia na rodzica (Overlay)
  };

  render() {
    return (
      <Overlay onClick={this.handleClickOutside}>
        <ModalWrapper>
          <Img
            src={this.props.imageURL}
            alt=""
            onClick={this.handleImageClick}
          />
        </ModalWrapper>
      </Overlay>
    );
  }
}
export default Modal;
