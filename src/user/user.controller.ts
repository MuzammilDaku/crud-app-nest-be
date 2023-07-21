import {
  Body,
  Controller,
  Post,
  Req,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    const result = this.userService.getUsers();
    return result;
  }
  @Post()
  postUser(@Body() requestBody: any) {
    const data = this.userService.postUser(requestBody);
    return data;
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    const data = this.userService.deleteUserById(id)
  }

  @Patch('/:id')
  patchUSer(@Param('id') id:number , @Body() body:any){
   const data = this.userService.updateUser(id,body)
  }
}
