import React, { Component } from 'react';
import './styles.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import fetchImages from './services/imagesApi';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    largeImageURL: '',
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    const prevQuery = prevState.query;
    const nextQuery = query;
    if (prevQuery !== nextQuery) {
      this.fetchImagesFromApi();
    }
  }

  getSnapshotBeforeUpdate() {
    const { page } = this.state;
    const currentList = document.querySelector('.ImageGallery');
    if (page >= 3 && currentList) {
      // console.log();
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
    return null;
  }

  fetchImagesFromApi = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    fetchImages
      .fetchImagesWithQuery(query, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  setLargeImageToModal = url => {
    this.setState({ largeImageURL: url });
  };

  removeLargeImageToModal = () => {
    this.setState({ largeImageURL: '' });
  };

  setSearchQuery = query => {
    this.setState({ query, page: 1, images: [] });
  };

  render() {
    const { images, isLoading, error, largeImageURL } = this.state;

    return (
      <>
        <Searchbar setSearchQuery={this.setSearchQuery} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} callModal={this.setLargeImageToModal} />
        )}
        {images.length > 0 && (
          <LoadMoreBtn onButttonClick={this.fetchImagesFromApi} />
        )}
        {largeImageURL && (
          <Modal
            url={largeImageURL}
            closeModal={this.removeLargeImageToModal}
          />
        )}
      </>
    );
  }
}

export default App;
