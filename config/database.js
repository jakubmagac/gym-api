const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'chunee.db.elephantsql.com/jnjsqtin'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'jnjsqtin'),
      username: env('DATABASE_USERNAME', 'jnjsqtin'),
      password: env('DATABASE_PASSWORD', ' oIIeHuqN9BNUCEX-K2W9NDnWEwcQRIU3'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), 
      },
    },
    debug: false,
  },
});
