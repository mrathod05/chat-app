import { Module } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { ENV_CONSTANT } from '../constants/env';
import { UsersModule } from 'src/users/users.module';
import { CONST } from '../constants';
import { AuthModule } from 'src/auth/auth.module';

const { APP_NAME } = ENV_CONSTANT;
const { API_VERSIONS, DESCRIPTION, SERVERS, PREFIX } = CONST.SWAGGER;

@Module({})
export class SwaggerSetupModule {
  static setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle(APP_NAME)
      .setDescription(DESCRIPTION)
      .addServer(SERVERS[0])
      .setVersion(API_VERSIONS[0])
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config, {
      include: [AuthModule, UsersModule],
    });

    SwaggerModule.setup(PREFIX, app, document, {
      swaggerOptions: {
        defaultModelsExpandDepth: -1,
        persistAuthorization: true,
      },
    });
  }
}
