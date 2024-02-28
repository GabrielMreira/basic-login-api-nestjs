import { PartialType } from '@nestjs/mapped-types';
import { CreatUserDTO } from './create-user.dto';

export class UpdateUserDTO extends PartialType(CreatUserDTO) {}
