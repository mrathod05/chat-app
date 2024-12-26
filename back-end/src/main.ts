import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS_CONFIG } from './lib/config/cors';
import { ExceptionHandler } from './lib/config/exception.handler';
import { ENV_CONSTANT } from './lib/constants/env';
import { json } from 'express';
import { SwaggerSetupModule } from './lib/swagger/swagger.module';
import { STATIC } from './lib/constants/static';

const { APP_URL, PORT, GLOBAL_PREFIX } = ENV_CONSTANT;
const { EXPRESS, SWAGGER } = STATIC;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  SwaggerSetupModule.setupSwagger(app);

  app.setGlobalPrefix(GLOBAL_PREFIX);

  app.enableCors(CORS_CONFIG);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  app.useGlobalFilters(new ExceptionHandler());

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

bootstrap();
