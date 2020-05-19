import axios from 'axios';
import { LocalStorage } from './LocalStorage';
import SocketApi from './SocketApi';

const { storeLocale, getLocale, removeLocale } = LocalStorage;

const urls = {
  login: 'http://localhost:5000/api/auth/login',
  register: 'http://localhost:5000/api/auth/register',
  viewer: 'http://localhost:5000/api/account',
  latest: 'http://localhost:5000/api/products/latest',
  products: 'http://localhost:5000/api/products',
  saved: 'http://localhost:5000/api/products/saved',
  search: 'http://localhost:5000/api/products/search',
  images: 'http://localhost:5000/api/upload/images',
  users: 'http://localhost:5000/api/users',
  chats: 'http://localhost:5000/api/chats',
};

export const Api = {
  _token: null,

  init() {
    try {
      this._token = getLocale('token');

      this._setTokenToAxios();

      SocketApi.init(this._token);
    } catch (err) {
      console.error(err);
    }
  },

  async login(body) {
    const res = await axios.post(urls.login, body);

    try {
      this.setToken(res.data.token);
    } catch (err) {
      console.error(err);
    }

    return res;
  },

  async register(body) {
    const res = await axios.post(urls.register, body);

    try {
      this.setToken(res.data.token);
    } catch (err) {
      console.error(err);
    }

    return res;
  },

  logout() {
    this._token = null;

    removeLocale('token');
  },

  async getViewer() {
    return await axios.get(urls.viewer);
  },

  async putViewer(body) {
    return await axios.put(urls.viewer, body);
  },

  async getLatestProducts() {
    return await axios.get(urls.latest);
  },

  async getMoreLatestProducts(from, limit) {
    return await axios.get(
      `${urls.latest}?from=${from}&limit=${limit}`,
    );
  },

  async saveProduct(id) {
    return await axios.post(`${urls.products}/${id}/saved`);
  },

  async unSaveProduct(id) {
    return await axios.delete(`${urls.products}/${id}/saved`);
  },

  async getSavedProducts() {
    return await axios.get(urls.saved);
  },

  async getSearchProducts(query) {
    return await axios.get(`${urls.search}${query}`);
  },

  async getUserById(id) {
    return await axios.get(`${urls.users}/${id}`);
  },

  async getProductById(id) {
    return await axios.get(`${urls.products}/${id}`);
  },

  async getUserProducts(id) {
    return await axios.get(`${urls.users}/${id}/products`);
  },

  async addProduct(body) {
    return await axios.post(urls.products, body);
  },

  async uploadImages(formData) {
    return await axios.post(urls.images, formData);
  },

  async createChat(id, message) {
    return await axios.post(`${urls.products}/${id}/createChat`, {
      message,
    });
  },

  async getChats() {
    return await axios.get(urls.chats);
  },

  async getMessages(chatId) {
    return await axios.get(
      `${urls.chats}/${chatId}/messages?limit=10`,
    );
  },

  async getMoreMessages(chatId, offset) {
    return await axios.get(
      `${urls.chats}/${chatId}/messages?from=${offset}&limit=10`,
    );
  },

  sendMessage(chatId, message) {
    return axios.post(`${urls.chats}/${chatId}/messages`, {
      message,
    });
  },

  setToken(token) {
    this._token = token;
    this._storeToken();
    this._setTokenToAxios();
  },

  _storeToken() {
    storeLocale('token', this._token);
  },

  _setTokenToAxios() {
    axios.defaults.headers.common.Authorization = `Bearer ${this._token}`;
  },
};
