/**
 * Test case for ponScaffold.
 * Runs with mocha.
 */
'use strict'

const ponScaffold = require('../lib/pon_scaffold.js')
const assert = require('assert')
const co = require('co')

describe('pon-scaffold', function () {
  this.timeout(8000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Generate task', () => co(function * () {
    yield ponScaffold('task', `${__dirname}/../tmp/foo/bar-task`, {
      straight: true,
      force: true
    })
  }))
})

/* global describe, before, after, it */
