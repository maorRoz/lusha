import * as mongoose from 'mongoose';
import { IsString } from 'class-validator';

export class User {
  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsString()
  email!: string;

  @IsString()
  password!: string;

  @IsString()
  description!: string;
}

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  description: String
});
