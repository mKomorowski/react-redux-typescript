module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  preset: "ts-jest",
  coverageDirectory: "<rootDir>/coverage/",
  moduleFileExtensions: [".mjs", "ts", "tsx", "js", "jsx", "svg"],
  roots: ["<rootDir>/src/"],
  rootDir: "../../",
  testEnvironment: "jsdom",
  testMatch: ["**/*.(spec|test).(ts|tsx)"],
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/config/jest/setup.ts"],
  moduleNameMapper: {
    "\\.(scss)$": "<rootDir>/config/jest/__mocks__/styleMock.js",
  },
};
