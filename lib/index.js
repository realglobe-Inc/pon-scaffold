/**
 * Scaffold generator for pon
 * @module pon-scaffold
 */

'use strict'

const ponScaffold = require('./pon_scaffold')
const tmpls = require('./tmpls.json')

let lib = ponScaffold.bind(this)

Object.assign(lib, ponScaffold, {
  tmpls,
  ponScaffold
})

module.exports = lib
