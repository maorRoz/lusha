import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<Document & User>) {}

  async createUser(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find();
  }
}
