import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS_CONFIG } from './lib/config/cors';
import { GlobalExceptionHandler } from './lib/config/exception.handler';
import { ENV_CONSTANT } from './lib/constants/env';
import { json } from 'express';
import { SwaggerSetupModule } from './lib/swagger/swagger.module';
import { CONST } from './lib/constants';
import { ERROR_MESSAGE } from './lib/constants/messages';

const { APP_URL, PORT, GLOBAL_PREFIX } = ENV_CONSTANT;
const { EXPRESS, SWAGGER } = CONST;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  SwaggerSetupModule.setupSwagger(app);

  app.setGlobalPrefix(GLOBAL_PREFIX);

  app.enableCors(CORS_CONFIG);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  app.useGlobalFilters(new GlobalExceptionHandler());

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: SWAGGER.API_VERSIONS,
  });

  app.use(json({ limit: EXPRESS.MAX_JSON_LIMIT }));

  await app.listen(PORT);

  Logger.log(
    `🚀 Application is running on: ${APP_URL}:${PORT}/${GLOBAL_PREFIX}`,
  );
}

bootstrap().catch(() => Logger.error(ERROR_MESSAGE.APPLICATION_NOT_START));
