import AuthService from './AuthService';

export async function login() {
  return AuthService.login();
}

