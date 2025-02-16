module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cup4mvij1k6c739fsuog-a'), // Only host, not full URL
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_db_dymj'),
      user: env('DATABASE_USERNAME', 'strapi_db_dymj_user'),
      password: env('DATABASE_PASSWORD', 'tqX516ieROdrPHBHO1p15fO44fGyevY7'),
      ssl: { rejectUnauthorized: false },
    },
    debug: false,
  },
});
