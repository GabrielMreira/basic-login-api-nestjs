import { IsEmail, IsEnum, IsNotEmpty, IsStrongPassword } from 'class-validator';
import { roleEnum } from 'src/enums/role.enum';

export class CreatUserDTO {
  @IsNotEmpty({ message: 'Nome do usuario não pode ser vazio' })
  userName: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email do usuario não pode ser vazio' })
  email: string;

  @IsStrongPassword({ minLength: 8, minUppercase: 1, minNumbers: 1 })
  password: string;

  @IsEnum(roleEnum)
  role: roleEnum;
}
