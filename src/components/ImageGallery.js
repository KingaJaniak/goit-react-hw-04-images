import { Component } from 'react';
import { UlList } from './App.styled';

class ImageGallery extends Component {
  render() {
    return <UlList>{this.props.children}</UlList>;
  }
}

export default ImageGallery;
