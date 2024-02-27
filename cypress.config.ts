import { defineConfig } from "cypress";

const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path")

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // reading Excel document from fixre
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
    env:{
      stage: 'https://stage.pasv.us',
      prod: 'https://coding.pasv.us/cours',
      test: 'Hello World!',
      base: 'https://uitestingplayground.com',
      play1: 'https://play1.automationcamp.ir/expected_conditions.html',
      demoQA:'https://demoqa.com',
      herokuapp: 'https://the-internet.herokuapp.com',
      email: "realmoonlight83@yahoo.com",
      password:'Dylan2010'
      },
  },
defaultCommandTimeout: 17_000, 
});


// env.stage  -- dot notation