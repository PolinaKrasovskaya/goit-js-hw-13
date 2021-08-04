const axios = require('axios');
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22757150-c2d7916cb8ffee93e4314d78c'

async function fetchImages(name, page) {
  const response = await axios({
    url: `${BASE_URL}`,
    params: {
      key: `${API_KEY}`,
      q: `${name}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: `${page}`,
      per_page: 20,
    },
  });

  return response.data;
}

export { fetchImages };