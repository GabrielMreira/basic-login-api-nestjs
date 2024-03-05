import { Controller, Get, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Get()
  getUser() {}

  @Post('cadastrar')
  create() {}
}
