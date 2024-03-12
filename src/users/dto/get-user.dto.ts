import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class GetUserDTO {
  @IsEmail()
  @IsNotEmpty({ message: 'Email do usuario não pode ser vazio' })
  email: string;

  @IsStrongPassword({ minLength: 8, minUppercase: 1, minNumbers: 1 })
  password: string;
}
