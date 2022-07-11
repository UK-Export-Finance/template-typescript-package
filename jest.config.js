module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['tests/**/*.test.ts'],
  coverageDirectory: 'generated_reports/coverage/tests',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/*.test.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
