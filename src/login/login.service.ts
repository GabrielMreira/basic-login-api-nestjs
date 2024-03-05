import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import * as bcrypt from 'bcrypt';
import { CreatUserDTO } from 'src/users/dto/create-user.dto';

@Injectable()
export class LoginService {
  constructor(private readonly userService: UserService) {}

  getUser() {
    
  }

  create(createUserDTO: CreatUserDTO) {
    const salt = bcrypt.genSaltSync();
    createUserDTO.password = bcrypt.hashSync(createUserDTO.password, salt);
    return this.userService.createUser(createUserDTO);
  }

  updateUser() {}

  deleteUser() {}
}
