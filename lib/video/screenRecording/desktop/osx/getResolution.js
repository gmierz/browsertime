'use strict';

const log = require('intel').getLogger('browsertime.video');
const execa = require('execa');

module.exports = async function() {
  const output = await execa.command(
    'system_profiler SPDisplaysDataType | grep Resolution',
    { shell: true }
  );
  log.info(output);
  log.info(output.stdout);
  return output.stdout;
};
