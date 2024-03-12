import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import * as bcrypt from 'bcrypt';
import { CreatUserDTO } from 'src/users/dto/create-user.dto';
import { GetUserDTO } from 'src/users/dto/get-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async getUser(getUserDTO: GetUserDTO) {
    const user = await this.userService.getByLogin(getUserDTO);
    const payload = {
      userName: user.userName,
      email: user.email,
      role: user.role,
    };
    return this.jwtService.sign(payload);
  }

  create(createUserDTO: CreatUserDTO) {
    const salt = bcrypt.genSaltSync();
    createUserDTO.password = bcrypt.hashSync(createUserDTO.password, salt);
    return this.userService.createUser(createUserDTO);
  }

  updateUser() {}

  deleteUser() {}
}
