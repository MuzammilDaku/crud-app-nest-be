import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userInterface } from './schemas/user';
@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<userInterface>,
  ) {}

  async getUsers(){
  const result = await this.userModel.find()
  // console.log(result)
    return result
  }

  async postUser(requestBody) {
    const body = requestBody;
    console.log(body);
    const result = await new this.userModel(body);
    await result.save();
    return {
      body,
      message: 'saved',
    };
  }

  async deleteUserById (_id){
    const id = _id
    const del = await this.userModel.findByIdAndDelete(id)
    return del
  }

  async updateUser(_id,body){
    const id = _id
    const update = await this.userModel.findByIdAndUpdate(id,body)
    return 'Updated'
  }
}
