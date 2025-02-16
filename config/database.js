const path = require('path');

module.exports = ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production';

  return {
    connection: isProduction
      ? {
          client: 'postgres',
          connection: {
            host: env('DATABASE_HOST'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME'),
            user: env('DATABASE_USERNAME'),
            password: env('DATABASE_PASSWORD'),
            ssl: { rejectUnauthorized: false },
          },
          debug: false,
        }
      : {
          client: 'sqlite',
          connection: {
            filename: path.join(__dirname, '..', '.tmp/data.db'),
          },
          useNullAsDefault: true,
        },
  };
};
