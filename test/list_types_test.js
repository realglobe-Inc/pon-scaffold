/**
 * Test case for listTypes.
 * Runs with mocha.
 */
'use strict'

const listTypes = require('../lib/list_types.js')
const assert = require('assert')

describe('list-types', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('List types', async () => {
    listTypes({})
  })
})

/* global describe, before, after, it */
