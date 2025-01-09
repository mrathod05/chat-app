import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ENV_CONSTANT } from '../constants/env';
import { NODE_ENV } from '../constants/enums';
import { ERROR_MESSAGE } from '../constants/messages';

/**
 * Global exception handler that catches and formats all unhandled exceptions
 * in the application.
 */
@Catch()
export class GlobalExceptionHandler implements ExceptionFilter {
  catch(exception: Error | HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest();

    const status = this.getHttpStatus(exception);

    const message = this.extractErrorMessage(exception);

    const errorResponse: TypeApiResponse = {
      code: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    if (ENV_CONSTANT.NODE_ENV === NODE_ENV.DEV) {
      errorResponse.details = {
        name: exception.name,
        stack: exception.stack,
      };
    }

    this.logError(exception, errorResponse);

    delete errorResponse?.details;

    response.status(status).json({ ...errorResponse });
  }

  private getHttpStatus(exception: Error | HttpException): number {
    if (exception instanceof HttpException) {
      return exception.getStatus();
    }
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }

  private extractErrorMessage(exception: Error | HttpException): string {
    if (exception instanceof HttpException) {
      const response = exception.getResponse();
      if (typeof response === 'object' && 'message' in response) {
        const message = response.message;
        return Array.isArray(message) ? message[0] : String(message);
      }
      return exception.message;
    }
    return exception.message || ERROR_MESSAGE.INTERNAL_SERVER;
  }

  private logError(
    exception: Error | HttpException,
    errorResponse: TypeApiResponse,
  ): void {
    console.error('[Exception Handler]', {
      error: exception,
      response: errorResponse,
    });
  }
}

export class CustomException extends HttpException {
  constructor(response: string, status: number) {
    super(response, status);
  }
}
