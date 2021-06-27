import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Board } from '../resources/boards/board.model';
import { Task } from '../resources/tasks/task.model';
import { User } from '../resources/users/user.model';
import { config } from './config';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } = config;

const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'host.docker.internal',
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [Board, Task, User],
  logging: false,
  migrations: ['src/migrations/**/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default typeOrmConfig;
