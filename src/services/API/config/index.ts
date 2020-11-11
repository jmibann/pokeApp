import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const service = axios.create({
  baseURL: BASE_URL,
});

export default service;
