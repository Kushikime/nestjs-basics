import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get('/')
  getUsers() {
    return [
      { id: 1, name: 'Erik' },
      { id: 2, name: 'Lolka' },
    ];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      { id: 1, userId: 1, content: 'Erik post content' },
      { id: 2, userId: 2, content: 'Lolka post content' },
    ];
  }

  @Post('/create')
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log('post body: ', request.body);
    response.send('Created');
  }
}
