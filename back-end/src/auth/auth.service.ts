import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/lib/config/base.service';
import { CustomException } from 'src/lib/config/exception.handler';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from 'src/lib/constants/messages';
import { SignDto } from 'src/lib/dto/users.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(BaseService) private readonly baseService: BaseService,
    @Inject(UsersService) private readonly userService: UsersService,
  ) {}

  private handleError(error: unknown) {
    if (error instanceof CustomException) {
      throw error;
    }

    throw new CustomException(
      ERROR_MESSAGE.INTERNAL_SERVER,
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  async signIn(payload: SignDto) {
    try {
      await this.userService.createUser(payload);

      return this.baseService.responseHandler(
        HttpStatus.OK,
        SUCCESS_MESSAGE.OTP_SENT,
      );
    } catch (error) {
      this.handleError(error);
    }
  }
}
