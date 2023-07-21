import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schemas/user';
@Module({
  imports:[MongooseModule.forFeature([{name:'User',schema:userSchema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
