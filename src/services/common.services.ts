export interface IQueryParam {
  key: any;
  value: any;
}
export const apiRouteGenerator = (
  route: string,
  idParam?: number,
  query?: IQueryParam[],
) => {
  let url = route;
  if (idParam) {
    url = `${url}/${idParam}`;
  }
  if (query && query.length > 0) {
    const searchParams = new URLSearchParams();
    for (const item of query) {
      if (item.value) {
        searchParams.append(item.key, item.value as string);
      }
    }
    return `${url}?${searchParams.toString()}`;
  }
  return url;
};

export interface IListResponse<T> {
  data: T[];
  status?: number;
  totalResults: number;
  resultsPerPage: number;
  page: number;
  error?: unknown;
  message?: string;
  success?: boolean;
}

export interface IResponse<T> {
  data: T;
  error?: unknown;
  message?: string;
  errorCode?: string;
  status?: number;
  success: boolean;
}
