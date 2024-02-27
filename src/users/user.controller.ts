import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {}

  @Post
  create(@Body body) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {}

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string) {}

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {}
}
