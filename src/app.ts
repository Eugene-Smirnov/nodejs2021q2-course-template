import express, { NextFunction, Request, Response } from 'express';
import * as swaggerUI from 'swagger-ui-express';
import * as path from 'path';
import * as YAML from 'yamljs';
import { finished } from 'stream';
import { logRequest } from './logging/log-request';
import { router as taskRouter } from './resources/tasks/task.router';
import { router as boardRouter } from './resources/boards/board.router';
import { router as userRouter } from './resources/users/user.router';
import HttpException from './exceptions/HttpException';
import { logError } from './logging/log-error';
// import { log } from './logging/log';

export const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use((req, res, next) => {
  const { method, url, body, query } = req;
  const startTime = Date.now();

  next();

  finished(res, () => {
    const ms = Date.now() - startTime;
    const { statusCode } = res;
    logRequest({ method, url, body, query, ms, statusCode });
  });
});

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards/:boardId/tasks', taskRouter);

app.use(
  (err: HttpException, req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    const { method, url, body, query } = req;
    logError({ err, method, url, body, query });
    res.status(status).send({ status, message });
  }
);
