// typeorm.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1259',
  database: 'node_db_test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  retryDelay: 3000,
  retryAttempts: 10,
  migrations: ["dist/migrations/*{.ts,.js}"],
  migrationsTableName: "migrations",
  migrationsRun: true,
};
