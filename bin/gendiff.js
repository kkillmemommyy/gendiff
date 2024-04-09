#!/usr/bin/env node

import { program } from 'commander';
import generateDifferences from '../src/core.js';

program
  .name('gendiff')
  .description(
    'Compares two configuration files and shows a difference.\n'
  + 'Supported input formats (file extension): "json", "yaml".\n'
  + 'Supported output formats: "plain text", "stylish" or "json".',
  )
  .version('1.0.0')
  .option('-f, --format [type]', 'output format. Default is stylish')
  .argument('<filepath1>', 'path to file1. Can be raltive or absolute')
  .argument('<filepath2>', 'path to file2. Can be raltive or absolute')
  .action((filePath1, filePath2) => {
    console.log(generateDifferences(filePath1, filePath2, program.opts().format));
  });

program.parse();
