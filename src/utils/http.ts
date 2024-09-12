/* eslint-disable */
import axios from '@/configs/axios';
import httpStatus from '@/configs/httpStatus';
import { apiRouteGenerator } from '../services/common.services';
import { store } from '../store';
import { UserLogout } from '@/store/auth/actions';

interface IQueryParam {
  key: string;
  value: string | number;
}

const handleResponseData = (response: any) => {
  const success = !!(
    response.status === httpStatus.StatusOK ||
    response.status === httpStatus.StatusCreated
  );
  const responseTransform = {
    ...response.data,
    status: response.status,
    success,
  };
  return responseTransform;
};

class HttpClientHelper {
  async get<T>(path: string, idParam?: number, query?: IQueryParam[]) {
    try {
      const endpoint = apiRouteGenerator(path, idParam, query);
      const response = await axios.get<T>(endpoint);
      const data = handleResponseData(response) as T;
      return data;
    } catch (ex) {
      handleError(ex);
      return {} as T;
    }
  }

  async post<T, U>(
    path: string,
    payload?: U,
    idParam?: number,
    headerConfig?: any,
  ) {
    try {
      const endpoint = apiRouteGenerator(path, idParam);
      const response = await axios.post<T>(endpoint, payload, headerConfig);
      const data = handleResponseData(response) as T;
      return data;
    } catch (ex) {
      handleError(ex);
      return {} as T;
    }
  }

  async put<T, U>(path: string, payload: U, idParam?: number) {
    try {
      const endpoint = idParam
        ? apiRouteGenerator(path, idParam)
        : apiRouteGenerator(path);
      const response = await axios.put<T>(endpoint, payload);
      const data = handleResponseData(response) as T;
      return data;
    } catch (ex) {
      handleError(ex);
      return {} as T;
    }
  }

  async patch<T, U>(
    path: string,
    payload: U,
    idParam?: number,
    headerConfig?: any,
  ) {
    try {
      const endpoint = apiRouteGenerator(path, idParam);
      const response = await axios.patch<T>(endpoint, payload, headerConfig);
      const data = handleResponseData(response) as T;
      return data;
    } catch (ex) {
      handleError(ex);
      return {} as T;
    }
  }

  async delete<T, U = {}>(path: string, payload?: U, idParam?: number) {
    try {
      const endpoint = apiRouteGenerator(path, idParam);
      const response = await axios.delete<T>(endpoint, {
        data: payload,
      });
      const data = handleResponseData(response) as T;
      return data;
    } catch (ex) {
      handleError(ex);
      return {} as T;
    }
  }
}

function handleError(error: any) {
  if (error && error.status === httpStatus.StatusNotFound) return;
  if (error.status === httpStatus.StatusUnauthorized) {
    store.dispatch(UserLogout());
  }
}

export const ApiHelper = new HttpClientHelper();
