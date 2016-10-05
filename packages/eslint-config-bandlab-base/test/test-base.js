import fs from 'fs';
import path from 'path';

import index from '../';

const files = { ...{ index } }; // object spread is to test parsing

fs.readdirSync(path.join(__dirname, '../rules')).forEach((name) => {
  // eslint-disable-next-line import/no-dynamic-require
  files[name] = require(`../rules/${name}`); // eslint-disable-line global-require
});
