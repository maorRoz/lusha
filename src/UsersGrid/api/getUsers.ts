import axios, { AxiosPromise } from 'axios';
import { User } from '../../types/User';

export const getUsers = (): AxiosPromise<User[]> => axios.get('/user');
