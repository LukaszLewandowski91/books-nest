import axios from 'axios';
import { API_URL } from '../config';

export const getUser = ({ user }) => user;
const reducerName = 'users';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

export const logIn = (payload) => ({ type: LOG_IN, payload });
export const logOut = () => ({ type: LOG_OUT });

export const loadLoggedUser = (userData) => {
  return async (dispatch) => {
    try {
      console.log(userData);
      let res = await axios.post(`${API_URL}/auth/login`, userData, {
        withCredentials: true,
      });
      dispatch(logIn(res.data));
    } catch (e) {
      console.log('error', e);
    }
  };
};

const usersReducer = (statePart = null, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case LOG_OUT:
      return null;
    default:
      return statePart;
  }
};

export default usersReducer;
