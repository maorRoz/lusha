import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:rootpassword@localhost:27017/admin',
      { useNewUrlParser: true }
    ),
    UserModule
  ]
})
export class AppModule {}
