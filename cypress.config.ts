import { defineConfig } from "cypress"; 

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      stage: 'https://stage.pasv.us/cours',
      prod: 'https://coding.pasv.us/cours',
      test: 'Hello World!',
      base: 'https://uitestingplayground.com',
      play1: 'https://play1.automationcamp.ir/expected_conditions.html'
      },
  },
defaultCommandTimeout: 17_000, 
});


// env.stage  -- dot notation