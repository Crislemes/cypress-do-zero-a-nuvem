const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'gy8v57',
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {},
  }

})
