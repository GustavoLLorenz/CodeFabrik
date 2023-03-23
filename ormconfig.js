console.log('Configuring ORM - Conecting...')

module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  schema: 'public',
  synchronize: false,
  logging: false,
  ssl: false,
  // entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    // entitiesDir: './src/modules/**/infra/typeorm/entities',
    migrationsDir: './src/database/migrations/*.ts'
  }
}
