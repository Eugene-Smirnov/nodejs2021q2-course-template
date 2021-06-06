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
  Caught exception: ${JSON.stringify(err)}
  Exception origin: ${origin}`;
  log(content);
  errJournalLog(content);
});

process.on('unhandledRejection', (reason: Error, promise) => {
  const content = `----
  UNHANDLED REJECTION
  ----
  Unhandled Rejection at: ${JSON.stringify(promise)}
  Reason: ${JSON.stringify(reason)}`;
  log(content);
  errJournalLog(content);
});
