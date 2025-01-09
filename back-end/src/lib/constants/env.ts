import * as dotenv from 'dotenv';
dotenv.config();

export const ENV_CONSTANT = {
  //App
  NODE_ENV: process.env.NODE_ENV,
  APP_NAME: process.env.APP_NAME,
  APP_URL: process.env.APP_URL,
  PORT: process.env.PORT,
  GLOBAL_PREFIX: process.env.GLOBAL_PREFIX,

  //DB
  DB_URL: process.env.DB_URL,

  //CORS
  FRONTEND_URL: process.env.FRONTEND_URL,
};
