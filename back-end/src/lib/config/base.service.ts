import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
  responseHandler(
    code: HttpStatus,
    message: string,
    data?: unknown,
  ): TypeApiResponse {
    return {
      code,
      status: true,
      message,
      data,
      timestamp: Date.now().toLocaleString(),
    };
  }
}
