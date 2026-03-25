/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",

  extensionsToTreatAsEsm: [".ts"],

  // ✅ forma moderna (remove warning de deprecated)
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
  },

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },

  // 🔥 COVERAGE (ESSENCIAL)
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],

  // 🔥 define o que será analisado
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.test.ts",
    "!src/tests/**",
  ],
};