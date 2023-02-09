const { defineConfig } = require("cypress");
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          randomIndex = Math.floor(20 + Math.random() * 1000);
          return {
            username: faker.name.firstName() + randomIndex,
            password: '1q2w3e4R!'
          };
        },
      });
    },
  },
});
