import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      db_name: process.env.DB_NAME,
      db_port: parseInt(process.env.DB_PORT, 10),
      db_password: process.env.DB_PASSWORD,
      db_username: process.env.DB_USER,
      db_host: process.env.DB_HOST,
    },
    api_key: process.env.API_KEY,
    jwt_secret: process.env.JWT_SECRET,
  };
});
