import fs from 'fs';
import path from 'path';

const base = require('../base');

const files = { base };

fs.readdirSync(path.join(__dirname, '../rules')).forEach((name) => {

  // eslint-disable-next-line import/no-dynamic-require
  files[name] = require(`../rules/${name}`); // eslint-disable-line global-require
});
