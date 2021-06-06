import { config } from './common/config';

import { app } from './app';
import { log } from './logging/log';
import { errJournalLog } from './logging/log-errjournal';

app.listen(config.PORT, () =>
  console.log(`App is running on http://localhost:${config.PORT}`)
);

process.on('uncaughtException', (err: Error, origin: string) => {
  const content = `----
  UNCAUGHT EXCEPTION
  ----
  Caught exception: ${err}
  Exception origin: ${origin}
  \n`;
  log(content);
  errJournalLog(content);
});

process.on('unhandledRejection', (reason: Error, promise) => {
  const content = `----
  UNHANDLED REJECTION
  ----
  Unhandled Rejection at: ${promise}
  Reason: ${reason}
  \n`;
  log(content);
  errJournalLog(content);
});

Promise.reject(Error('Oops!'));
