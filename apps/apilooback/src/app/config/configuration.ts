export default (entities) => ({
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST || '34.78.18.91',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'apiloo',
  synchronize: true,
  entities,
});
