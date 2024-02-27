import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoginService {

    constructor(
        @InjectRepository 
        private readonly loginRepository
    ){}
}
