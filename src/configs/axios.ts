/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import axios from 'axios';

import { requestRefreshToken } from '@/services/auth';

import httpStatus from './httpStatus';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = "http://45.77.170.201:7999/api";
// axios.defaults.headers.common["Authorization"] = window.localStorage.getItem("jwt");
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
const { CancelToken } = axios;
const source = CancelToken.source();

const configAxios = {
  baseURL: `${import.meta.env.VITE_API_URI}`,
  validateStatus: (status: number) =>
    (status >= httpStatus.StatusOK &&
      status < httpStatus.StatusMultipleChoices) ||
    status === httpStatus.StatusBadRequest ||
    status === httpStatus.StatusNotFound,
  cancelToken: source.token,
  timeout: 60 * 1000, // Timeout
  // withCredentials: true // Check cross-site Access-Control
};

const mainAxios = axios.create(configAxios);
mainAxios.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    const originalRequest = config;
    if (!config?.headers) {
      throw new Error(
        "Expected 'config' and 'config.headers' not to be undefined",
      );
    }
    if (window.localStorage.getItem('jwt')) {
      config.headers.Authorization = `Bearer ${window.localStorage.getItem(
        'jwt',
      )}`;
    }

    // config.headers.get['x-exchange'] = window.localStorage.getItem('systemFilter');
    return Promise.resolve(originalRequest);
  },
  async (error) =>
    // Do something with request error
    Promise.reject(error),
);
// Add a response interceptor
mainAxios.interceptors.response.use(
  (response) =>
    // Do something with response data
    response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === httpStatus.StatusUnauthorized &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = window.localStorage.getItem('refresh_token') ?? '';
      const response = await requestRefreshToken(refreshToken);
      if (response.data) {
        const { data } = response;
        window.localStorage.setItem('jwt', data?.accessToken ?? '');
        axios.defaults.headers.common.Authorization = `Bearer ${data?.accessToken}`;
        return mainAxios(originalRequest);
      }
      return Promise.reject(error.response);
    }
    // Do something with response error
    return Promise.reject(error.response);
  },
);

export default mainAxios;
