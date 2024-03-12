import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [
    JwtModule.register({
      global: true,
      secret: 'teste',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  exports: [],
})
export class LoginModule {}
