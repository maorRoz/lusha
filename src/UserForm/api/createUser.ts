import axios from 'axios';
import { User } from '../../../server/user/models/user.model';

export const createUser = (user: User & { password: string }) =>
  axios.post('/user', user);
