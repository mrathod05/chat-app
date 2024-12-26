/*   eslint-disable  @typescript-eslint/explicit-module-boundary-types */
/*  eslint-disable @typescript-eslint/no-explicit-any */
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class ExceptionHandler implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    // console.log(CONSTANTS.CONSOLE.ERROR, CONSTANTS.MODULE.EXCEPTION, exception);

    const ctx = host.switchToHttp();

    const response = ctx.getResponse();
    const responseMessage = exception.response?.message;

    const errorMessage =
      Array.isArray(responseMessage) && responseMessage.length > 0
        ? responseMessage[0]
        : responseMessage ||
          exception.message ||
          exception.response ||
          exception ||
          'Something went wrong';

    const code = exception.statusCode || exception.status || 500;

    response.status(code).json({
      code: code,
      message: errorMessage,
    });
  }
}
