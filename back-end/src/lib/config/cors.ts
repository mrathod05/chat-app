import { ENV_CONSTANT } from '../constants/env';

const { FRONTEND_URL } = ENV_CONSTANT; // test

const CORS_CONFIG = {
  origin: FRONTEND_URL, // Set the allowed origin(s)
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Set the allowed HTTP methods
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'APP_KEY',
    'Origin',
    'X-Requested-With',
    'Accept',
    'accessToken',
    'app_version',
    'platform',
    'ios_version',
    'countryISO',
    'Access-Control-Allow-Origin',
  ], // Set the allowed headers
  credentials: true, // Enable sending cookies across domains
};

const SMSTEMP = {
  LOGIN: 'SEND_OTP',
};
export { CORS_CONFIG, SMSTEMP };
