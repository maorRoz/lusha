import axios, { AxiosPromise } from 'axios';
import { User } from '../../types/User';

export const createUser = (
  user: User & { password: string }
): AxiosPromise<User> => axios.post('/user', user);
