/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';;
import { InjectRepository } from '@nestjs/typeorm';
import { CreatUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { Users } from './entities/users.entity';
import { GetUserDTO } from './dto/get-user.dto';
import * as bcrypt from 'bcrypt';

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

  async getByLogin(getUserDTO: GetUserDTO) {
    const user = await this.UserRepository.findOneBy({email: getUserDTO.email});
    if(!user)
      throw new UnauthorizedException('Email ou senha incorretos')

    try {
      if(bcrypt.compare(getUserDTO.password, user.password))
        return user;  
    } catch (e) {
      throw new UnauthorizedException('Email ou senha incorretos')
    }
  }

}
