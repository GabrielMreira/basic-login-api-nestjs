import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/config.db';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LoginModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
