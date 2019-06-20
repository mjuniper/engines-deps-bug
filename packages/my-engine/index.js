/* eslint-env node */
'use strict';
const EngineAddon = require('ember-engines/lib/engine-addon'); // eslint-disable-line node/no-unpublished-require

const hash = {
  name: require('./package').name,

  isDevelopingAddon: function () {
    return true;
  },

  lazyLoading: {
    enabled: false // if we make this true it will not build!
  }

};

module.exports = EngineAddon.extend(hash);
