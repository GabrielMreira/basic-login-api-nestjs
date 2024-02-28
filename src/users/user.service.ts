/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';;
import { InjectRepository } from '@nestjs/typeorm';
import { CreatUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly UserRepository: Repository<Users>,
  ) {}

  getAll(): Promise<Users[]>{
    return this.UserRepository.find();
  }

  async createUser(createUser: CreatUserDTO): Promise<Users> {
    return await this.UserRepository.save(createUser);
  }

  findById(id: string): Promise<Users> {
    return this.UserRepository.findOneBy({ id });
  }

  async update(id: string, updateDTO: UpdateUserDTO) {
    await this.UserRepository.update(id, updateDTO);
    return this.findById(id);
  }

  delete(id: string) {
    this.UserRepository.delete(id);
    return this.getAll();
  }
}
