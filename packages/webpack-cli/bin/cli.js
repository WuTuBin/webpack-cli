#!/usr/bin/env node

'use strict';
require('v8-compile-cache');
const importLocal = require('import-local');
const parseNodeArgs = require('../lib/utils/parse-node-args');
const runner = require('../lib/runner');

// Prefer the local installation of webpack-cli
if (importLocal(__filename)) {
    return;
}
process.title = 'webpack';

const [, , ...rawArgs] = process.argv;
const { cliArgs, nodeArgs } = parseNodeArgs(rawArgs);

runner(nodeArgs, cliArgs);
