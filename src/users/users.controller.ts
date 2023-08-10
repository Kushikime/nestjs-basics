import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get('/')
  getUsers(@Query('sortDesc') sortDesc: boolean = false) {
    console.log('sortDesc: ', sortDesc);
    console.log('sortDesc type: ', typeof sortDesc);

    return [
      { id: 1, name: 'Erik' },
      { id: 2, name: 'Lolka' },
    ];
  }

  @Get(':id')
  getUserById(@Param('id') userId: number) {
    console.log('userId: ', typeof userId); // number
    return [{ id: 1, name: 'Erik' }];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      { id: 1, userId: 1, content: 'Erik post content' },
      { id: 2, userId: 2, content: 'Lolka post content' },
    ];
  }

  //   @Post('/createtest')
  //   createUserTest(@Req() request: Request, @Res() response: Response) {
  //     console.log('post body: ', request.body);
  //     response.send('Created');
  //   }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }
}
