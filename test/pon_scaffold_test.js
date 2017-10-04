/**
 * Test case for ponScaffold.
 * Runs with mocha.
 */
'use strict'

const ponScaffold = require('../lib/pon_scaffold.js')
const assert = require('assert')

describe('pon-scaffold', function () {
  this.timeout(8000)

  before(async () => {

  })

  after(async () => {

  })

  it('Generate task', async () => {
    await ponScaffold('task', `${__dirname}/../tmp/foo/bar-task`, {
      straight: true,
      force: true
    })
  })
})

/* global describe, before, after, it */
