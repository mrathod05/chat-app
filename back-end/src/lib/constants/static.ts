import { ENV_CONSTANT } from './env';

const { APP_NAME, GLOBAL_PREFIX } = ENV_CONSTANT;
export const STATIC = {
  EXPRESS: {
    MAX_JSON_LIMIT: '100mb',
  },
  SWAGGER: {
    DESCRIPTION: `The ${APP_NAME} API description`,
    API_VERSIONS: ['1'],
    SERVERS: [`/${GLOBAL_PREFIX}/v1`],
    VERSION: '1.0',
    PREFIX: 'api-docs',
  },
};
