const { defineConfig } = require("cypress");
const { getUser } = require("./cypress/utils/aws");

module.exports = defineConfig({
  env: {
    UAT_URL: "x"
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async getVariables({ id, user }) {
          return await getUser(id, user);
        }
      })
    },
  },
});
