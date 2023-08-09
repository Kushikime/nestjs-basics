import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/CreateUser.dto';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get('/')
  getUsers(@Query('sortBy') sortBy: string) {
    console.log('sortBy: ', sortBy);
    return [
      { id: 1, name: 'Erik' },
      { id: 2, name: 'Lolka' },
    ];
  }

  @Get(':id')
  getUserById(@Param() userId: string) {
    console.log('userId: ', userId);
    return [{ id: 1, name: 'Erik' }];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      { id: 1, userId: 1, content: 'Erik post content' },
      { id: 2, userId: 2, content: 'Lolka post content' },
    ];
  }

  @Post('/createtest')
  createUserTest(@Req() request: Request, @Res() response: Response) {
    console.log('post body: ', request.body);
    response.send('Created');
  }

  @Post('/create')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }
}
