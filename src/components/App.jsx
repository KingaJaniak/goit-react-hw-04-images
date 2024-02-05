import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Modal from './Modal';
import { AppWrapper, ImgSmall, BtnLoader } from './App.styled';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '41181454-8b56e64d19cc61326c145b8db';
const perPage = 12;

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [query, setQuery] = useState('');

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setQuery(query);
      const response = await axios.get(
        `?q=${query}&page=1&key=${apiKey}&per_page=${perPage}`
      );
      setImages(response.data.hits);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = Math.ceil(images.length / perPage) + 1;
      const response = await axios.get(
        `?q=${query}&page=${nextPage}&key=${apiKey}&per_page=${perPage}`
      );
      const newImages = response.data.hits;
      setImages((prevImages) => [...prevImages, ...newImages]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching more images:', error);
      setLoading(false);
    }
  };

  const handleImageClick = (imageURL) => {
    setShowModal(true);
    setSelectedImage(imageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <AppWrapper>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery>
        {images.map((image, index) => (
          <ImageGalleryItem key={`${image.id}-${index}`}>
            <ImgSmall
              src={image.webformatURL}
              alt=""
              onClick={() => handleImageClick(image.largeImageURL)}
            />
          </ImageGalleryItem>
        ))}
      </ImageGallery>
      {loading && <Loader />}
      {images.length > 0 && (
        <BtnLoader onClick={handleLoadMore}>Load More</BtnLoader>
      )}
      {showModal && (
        <Modal imageURL={selectedImage} onClose={handleCloseModal} />
      )}
    </AppWrapper>
  );
};

export default App;
