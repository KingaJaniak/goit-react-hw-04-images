import axios from 'axios';
import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Modal from './Modal';
import { AppWrapper, ImgSmall, BtnLoader } from './App.styled';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '41181454-8b56e64d19cc61326c145b8db';
const perPage = 12;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: false,
      showModal: false,
      selectedImage: null,
      activePage: 1,
    };
  }
  handleSearch = async query => {
    try {
      this.setState({ loading: true, query });
      const response = await axios.get(
        `?q=${query}&page=1&key=${apiKey}&per_page=${perPage}`
      );
      this.setState({ images: response.data.hits, loading: false });
    } catch (error) {
      console.error('Error fetching images:', error);
      this.setState({ loading: false });
    }
  };
  handleLoadMore = async () => {
    try {
      this.setState({ loading: true });
      const nextPage = Math.ceil(this.state.images.length / perPage) + 1;
      const response = await axios.get(
        `?q=${this.state.query}&page=${nextPage}&key=${apiKey}&per_page=${perPage}`
      );
      const newImages = response.data.hits;
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        loading: false,
      }));
    } catch (error) {
      console.error('Error fetching more images:', error);
      this.setState({ loading: false });
    }
  };
  handleImageClick = imageURL => {
    this.setState({ showModal: true, selectedImage: imageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };
  render() {
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery>
          {this.state.images.map((image, index) => (
            <ImageGalleryItem key={`${image.id}-${index}`}>
              <ImgSmall
                src={image.webformatURL}
                alt=""
                onClick={() => this.handleImageClick(image.largeImageURL)}
              />
            </ImageGalleryItem>
          ))}
        </ImageGallery>
        {this.state.loading && <Loader />}
        {this.state.images.length > 0 && (
          <BtnLoader onClick={this.handleLoadMore}>Load More</BtnLoader>
        )}
        {this.state.showModal && (
          <Modal
            imageURL={this.state.selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
      </AppWrapper>
    );
  }
}
