import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/users.schema';
import { FlattenMaps, Model, Types } from 'mongoose';
import { SignDto } from 'src/lib/dto/users.dto';
import { BaseService } from 'src/lib/config/base.service';
import { ERROR_CODE } from 'src/lib/constants';
import { ERROR_MESSAGE } from 'src/lib/constants/messages';
import { CustomException } from 'src/lib/config/exception.handler';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) readonly userModel: Model<User>,
    @Inject(BaseService) private readonly baseService: BaseService,
  ) {}

  async createUser(payload: SignDto): Promise<void | FlattenMaps<
    User & {
      _id: Types.ObjectId;
    }
  >> {
    try {
      const user = await this.userModel.create(payload);
      await user.save();

      return user.toJSON();
    } catch (error) {
      if (error?.code === ERROR_CODE.DUPLICATE) {
        throw new CustomException(
          ERROR_MESSAGE.USER_ALREADY_EXIST,
          HttpStatus.BAD_REQUEST,
        );
      }

      throw error;
    }
  }
}
