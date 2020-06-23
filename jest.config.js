module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
  coverageReporters: ["html", "text-summary"]
};
