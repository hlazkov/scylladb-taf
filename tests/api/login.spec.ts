import { expect, test } from '@playwright/test';
import { authApi, PostUserRequestBody } from '../../src/api/AuthApi';
import { users } from '../../src/utils/users.util';

test.describe('Auth flow', () => {
  const user = users['pavlo'];

  test('Perform login: positive scenario', async () => {
    const response = await authApi.v1.postUser({
      email: user.email,
      password: user.password,
    });
    expect.soft(response.data.accessToken).toBeTruthy();
  });

  test('Perform login: wrong password', async () => {
    const response = await authApi.v1.postUser({
      email: user.email,
      password: 'wrongPassword11',
    });
    expect.soft(response.data.accessToken).toBeFalsy();
    expect.soft(response.status).toEqual(401);
    expect.soft(response.data.errors).toContain('Incorrect email or password');
  });

  test('Perform login: wrong email', async () => {
    const response = await authApi.v1.postUser({
      email: 'wrong@gmail.com',
      password: 'wrongPassword11',
    });
    expect.soft(response.data.accessToken).toBeFalsy();
    expect.soft(response.status).toEqual(401);
    expect.soft(response.data.errors).toContain('Incorrect email or password');
  });

  test('Perform login: missing email', async () => {
    const response = await authApi.v1.postUser({
      password: user.password,
    } as PostUserRequestBody);
    expect.soft(response.data.accessToken).toBeFalsy();
    expect.soft(response.status).toEqual(400);
    expect.soft(response.data.errors).toContain('email must be an email');
  });

  test('Perform login: missing password', async () => {
    const response = await authApi.v1.postUser({
      email: user.email,
    } as PostUserRequestBody);
    expect.soft(response.data.accessToken).toBeFalsy();
    expect.soft(response.status).toEqual(400);
    expect.soft(response.data.errors).toContain('password must be a string');
    expect.soft(response.data.errors).toContain('password should not be empty');
  });

  test('Perform login: wrong password type', async () => {
    const response = await authApi.v1.postUser({
      email: user.email,
      password: { kinda: 'invalid' },
    } as unknown as PostUserRequestBody);
    expect.soft(response.data.accessToken).toBeFalsy();
    expect.soft(response.status).toEqual(400);
    expect.soft(response.data.errors).toContain('password must be a string');
  });

  // todo why is that? O_o
  test('Perform login: invitationToken set', async () => {
    const response = await authApi.v1.postUser({
      email: user.email,
      password: user.password,
      invitationToken: 'WRONG',
    } as PostUserRequestBody);
    expect.soft(response.data.accessToken).toBeFalsy();
    expect.soft(response.status).toEqual(403);
    expect.soft(response.data.errors).toContain('Tenant invitations are not allowed');
  });
});
