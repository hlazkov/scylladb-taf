import { ApiClient, Response } from './baseApiClient';

class AuthApi extends ApiClient {
  constructor() {
    super(`https://auth.cloud.scylladb.com/frontegg/identity/resources/auth`);
  }

  v1 = {
    postUser: (body: object, headers?: object): Response<{ accessToken: string }> =>
      this.post(`/v1/user`, body, headers),
  };
}

export const authApi = new AuthApi();
