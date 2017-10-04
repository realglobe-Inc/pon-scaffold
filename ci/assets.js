#!/usr/bin/env node
/**
 * Prepare asset files
 */
'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const filecopy = require('filecopy')
const path = require('path')
const {images} = require('pon-assets/lib/paths')

apeTasking.runTasks('assets', [
  async () => {
    for (const name of Object.keys(images)) {
      const filename = images[name]
      const result = await filecopy(filename, `assets/images/${path.basename(filename)}`, {
        mkdirp: true,
        force: true,
        mode: '644'
      })
      Object.keys(result).forEach((filename) =>
        console.log(`File generated: ${filename}`)
      )
    }
  }
])
