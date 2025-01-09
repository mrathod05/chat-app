import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserModel } from './schema/users.model';
import { BaseService } from 'src/lib/config/base.service';

@Module({
  imports: [UserModel],
  controllers: [UsersController],
  providers: [UsersService, BaseService],
  exports: [UsersService],
})
export class UsersModule {}
