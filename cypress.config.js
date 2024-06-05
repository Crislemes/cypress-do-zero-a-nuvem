const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videoCompression: true,
  
  viewportHeight: 880,
  viewportWidth: 1280,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    supportFile: false
  }
  
});
