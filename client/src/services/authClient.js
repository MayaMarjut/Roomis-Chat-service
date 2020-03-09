import Axios from 'axios';

const loginURL = '/api/auth/login';
const authURL = '/api/auth/authenticate';

export const loginUser = async user => {
  try {
    let response = await Axios.post(loginURL, user);
    return response.data.token;
  } catch (err) {
    console.error(err.message);
  }
};

export const isAuthenticated = async () => {
  let token = localStorage.getItem('token');
  if (!token) {
    return [false, null];
  } else {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    try {
      let response = await Axios.get(authURL, config);
      if (response.status !== 401 || response.status !== 403) {
        return [true, response.data.username];
      } else {
        return [false, null];
      }
    } catch (error) {
      // If authentication fails
      return [false, null];
    }
  }
};
