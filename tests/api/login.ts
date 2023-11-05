import { expect } from 'chai';
import { authApi } from '../../src/api/authApi';

describe('Auth API tests', () => {
  // this flow is not gonna work, its better to try via client secret
  it.skip('Positive user auth flow', async () => {
    const response = await authApi.v1.postUser(
      {
        email: 'cute.box@hotmail.com',
        password: 'Gfhjkm678^@*',
        invitationToken: '',
      },
      {
        'Frontegg-Source': 'login-box',
        'Content-Type': 'application/json',
        'X-Frontegg-Framework': 'react@18.2.0',
        'X-Frontegg-Sdk': '@frontegg/react@5.0.50',
        Origin: 'https://cloud.scylladb.com',
      },
    );
    // eslint-disable-next-line playwright/valid-expect
    expect(response.data.accessToken).to.not.be.undefined;
  });
});
