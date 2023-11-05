import { expect, test } from '@playwright/test';
import { authApi } from '../../src/api/authApi';

test.describe('Auth flow', () => {
  // this flow is not gonna work, its better to try via client secret
  test.fixme('Perform login', async () => {
    const response = await authApi.v1.postUser(
      {
        email: 'cute.box@hotmail.com',
        password: '',
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
    expect(response.data.accessToken).toBeTruthy();
  });
});
