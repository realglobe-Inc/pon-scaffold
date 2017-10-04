/**
 * @function render
 */

'use strict'

const tmplconv = require('tmplconv')

const prefix = '~~~~'
const suffix = '~~~~'

/** @lends render */
async function render (tmpl, dest, config, options = {}) {
  return await tmplconv.render(tmpl, dest, {
    silent: options.silent,
    pattern: [
      '**/*.*',
      '.*',
      '**/.*.bud.tmpl',
      '**/.*.hbs.tmpl'
    ],
    ignore: [
      '.DS_Store',
      '.svg'
    ],
    prefix,
    suffix,
    clean: false,
    once: false,
    data: config
  })
}

module.exports = render
