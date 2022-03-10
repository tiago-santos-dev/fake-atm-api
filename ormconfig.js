require('dotenv').config()

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

module.exports = {
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: [
    "./src/app/models/"
  ],
  migrations: [
    "./src/database/migrations/**/*.ts"
  ],
  cli: {
    "migrationsDir": "./src/database/migrations/**/*.ts"
  }
}
