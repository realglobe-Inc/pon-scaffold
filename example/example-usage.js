#!/usr/bin/env node

'use strict'

const ponScaffold = require('pon-scaffold')

// Generate module project
ponScaffold(
  'task', // Type
  'my-projects/my-custom-task', // Destination directory
  {
    force: false
  }
)
  .then(() => console.log('done!'))
  .catch((err) => console.error(err))
