import { isAuthenticated } from './services/authClient';

const Auth = {
  async isAuth() {
    let bool = await isAuthenticated();
    return bool;
  }
};

export default Auth;
