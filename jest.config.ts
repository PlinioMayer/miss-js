/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["node_modules", "dist"],
  testMatch: ["**/test/**/*.spec.ts"],
  testEnvironment: "node",
  moduleNameMapper: {
    "^@miss-js/(.*)$": "<rootDir>/packages/$1",
    "^@$": "<rootDir>/src",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@boolean$": "<rootDir>/packages/boolean/src",
    "^@boolean/(.*)$": "<rootDir>/packages/boolean/src/$1",
    "^@object$": "<rootDir>/packages/object/src",
    "^@object/(.*)$": "<rootDir>/packages/object/src/$1",
  },
};

export default config;
