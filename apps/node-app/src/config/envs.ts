import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  
  POSTGRES_URL: get('POSTGRES_URL').required().asString(),
  POSTGRES_USER: get('POSTGRES_USER').required().asString(),
  POSTGRES_DB: get('POSTGRES_DB').required().asString(),
  POSTGRES_PORT: get('POSTGRES_PORT').required().asPortNumber(),
  POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asString(),

  JWT_SEED: get('JWT_SEED').required().asString(),

  MAILER_SERVICE: get('MAILER_SERVICE').required().asString(),
  MAILER_EMAIL: get('MAILER_EMAIL').required().asString(),
  MAILER_SECRET_KEY: get('MAILER_SECRET_KEY').required().asString(),

  WEBSERVICE_URL: get('WEBSERVICE_URL').required().asString()
}