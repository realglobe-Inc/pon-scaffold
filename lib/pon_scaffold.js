/**
 * @function ponScaffold
 * @param {string} type - Scaffold type
 * @param {string} dest - Destination directory path
 * @param {Object} options - Optional settings1
 * @param {boolean} [options.straight=false] - No asking.
 * @param {boolean} [options.force=false] - Force to generate scaffold.
 * @param {boolean} [options.silent=false] - Disable logs.
 * @returns {Promise}
 */

'use strict'

const askconfig = require('askconfig')
const filemode = require('filemode')
const path = require('path')
const fs = require('fs')
const render = require('./render')
const gitconfig = require('gitconfig')
const tmpls = require('./tmpls')
const listTypes = require('./list_types')
const argx = require('argx')
const injection = require('./data')

/** @lends ponScaffold */
async function ponScaffold (type, dest, options = {}) {
  const args = argx(arguments)
  type = args.shift('string')
  dest = args.shift('string')
  if (!type) {
    listTypes(tmpls)
    return
  }

  if (!dest) {
    throw new Error('dest is required.')
  }

  const exists = await new Promise((resolve) =>
    fs.exists(dest, (exists) => resolve(exists))
  )
  const skip = exists && !options.force
  if (skip) {
    throw new Error(`${dest} is already exists. Use -f option to force.`)
  }
  let user = await gitconfig.get('user')
  {
    user = user || {name: '__user_name__'}
  }
  const defaults = Object.assign({
    package_name: path.basename(dest),
    package_description: '',
    github_repository: [user.name, path.basename(dest)].join('/')
  }, injection[type] || {})
  let config
  {
    if (options.straight) {
      config = Object.assign(defaults)
    } else {
      config = await askconfig(defaults)
    }
  }
  const data = Object.assign({}, {
    author_name: user.name,
    author_email: user.email,
    author_url: user.url
  }, config)

  if (!tmpls[type]) {
    throw new Error(`Unknown type: ${type}`)
  }
  const tmpl = path.resolve(__dirname, '..', tmpls[type])
  await render(tmpl, dest, data, {
    silent: options.silent
  })
  const bins = path.join(dest, '+(ci|bin)/**/*.*')
  await filemode(bins, '755')
}

module.exports = ponScaffold
