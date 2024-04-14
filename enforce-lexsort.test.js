const {RuleTester} = require("eslint");
const lexsortRule = require("./enforce-lexsort");

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

ruleTester.run(
  "enforce-lexsort",
  lexsortRule,
  { 
    valid: [{
      code: "const foo = 'bar';",
    }],
    invalid: [{
      code: "const foo = 'baz';",
      output: 'const foo = "bar";',
      errors: 1,
    }],
  }
);

console.log("All tests passed!");