import axios from 'axios';

const api = (search, pageImg) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${search}&page=${pageImg}&key=19837689-b4668a99c8160a282132f247e&image_type=photo&orientation=horizontal&per_page=12`,
    )

    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

export default api;
