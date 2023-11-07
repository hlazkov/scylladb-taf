import { ApiClient, Response } from './ApiClient';

class AuthApi extends ApiClient {
  constructor() {
    super(`https://auth.${process.env.BASE_URL}frontegg/identity/resources/auth`);
  }

  v1 = {
    postUser: (body: PostUserRequestBody, headers?: object): Response<{ accessToken?: string; errors?: string[] }> =>
      this.post(`/v1/user`, body, headers),
  };
}

export const authApi = new AuthApi();

export interface PostUserRequestBody {
  email: string;
  password: string;
  invitationToken?: string;
}
