/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  testMatch: ["**/test/**/*.spec.ts"],
  testEnvironment: "node",
  moduleNameMapper: {
    "^@$": "<rootDir>/src",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@boolean$": "<rootDir>/packages/boolean/src",
    "^@boolean/(.*)$": "<rootDir>/packages/boolean/src/$1",
  },
};

export default config;
