import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatUserDTO } from 'src/users/dto/create-user.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  getUser(@Body createUserDTO: CreatUserDTO) {
    return this.loginService.create(createUserDTO);
  }

  @Post('cadastrar')
  create() {}
}
