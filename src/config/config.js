const dotenv = require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": "2896",
    "database": "imdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialectOptions": {
       "ssl": {
         "require":true,
         "rejectUnauthorized": false
       }
    }
  }
}