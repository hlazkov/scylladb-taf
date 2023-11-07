import axios, { AxiosResponse, AxiosInstance } from 'axios';

export type Response<T> = Promise<AxiosResponse<T>>;

export class ApiClient {
  private instance: AxiosInstance;

  constructor(baseURL: string, headers?: object) {
    this.instance = axios.create({
      baseURL,
      timeout: 15000,
      validateStatus: () => true,
      headers: {
        // IDK why it (Frontegg app) does not like axios user-agent
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        ...headers,
      },
    });
  }

  protected get<T>(path: string, params?: object | string, headers?: object): Response<T> {
    return this.instance.get(path, { params, headers });
  }

  protected post<T>(path: string, body?: string | object, headers?: object): Response<T> {
    return this.instance.post(path, body, { headers });
  }

  protected put<T>(path: string, body?: string | object, headers?: object): Response<T> {
    return this.instance.put(path, { body, headers });
  }

  protected patch<T>(path: string, body?: string | object, headers?: object): Response<T> {
    return this.instance.patch(path, body, { headers });
  }

  protected delete<T>(path: string, body?: string | object, headers?: object): Response<T> {
    return this.instance.delete(path, { headers, data: body });
  }
}
