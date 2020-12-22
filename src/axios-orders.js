import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-pljeska.firebaseio.com/',
});

export default instance;
