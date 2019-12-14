'use strict';

const pathToFolder = require('../pathToFolder');
const path = require('path');

module.exports = {
  async savePng(name, data, url, storageManager, config, dir, options) {
    const buffer = {};
    return storageManager.writeData(
      `${name}.png`,
      buffer,
      path.join(pathToFolder(url, options), dir)
    );
  },

  async saveJpg(name, data, url, storageManager, config, dir, options) {
    const buffer = {};
    storageManager.writeData(
      `${name}.jpg`,
      buffer,
      path.join(pathToFolder(url, options), dir)
    );
  }
};
