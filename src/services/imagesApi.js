import axios from 'axios';

const fetchImagesWithQuery = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=17376560-8e441e2d761dd89297db2b9ae&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchImagesWithQuery,
};
