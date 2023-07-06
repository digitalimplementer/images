import * as process from 'process';

import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV,
  post: process.env.SERVER_PORT || 8000,
}));
