'use strict';

module.exports = {
  color: true,
  extension: ['ts'],
  'forbid-only': false,
  package: './package.json',
  parallel: false,
  retries: 1,
  spec: ['tests/api/**/*.ts'], // the positional arguments!
  timeout: '2000', // same as "timeout: '2s'"
  'trace-warnings': true, // node flags ok
};
