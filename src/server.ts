import { config } from './common/config';

import { app } from './app';
// import { log } from './logging/log';
// import { errJournalLog } from './logging/log-errjournal';

app.listen(config.PORT, () =>
  console.log(`App is running on http://localhost:${config.PORT}`)
);
