const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on);
    },
    baseUrl: 'http://localhost:3000/', 
    video: true, 
    projectId: "5pi8od"
  },
});
