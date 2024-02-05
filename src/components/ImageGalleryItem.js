import { Component } from 'react';
import { LiList } from './App.styled';

class ImageGalleryItem extends Component {
  render() {
    return <LiList>{this.props.children}</LiList>;
  }
}

export default ImageGalleryItem;
