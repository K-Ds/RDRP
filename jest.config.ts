import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest';

const presentConfig = createDefaultPreset();

const jestConfig: JestConfigWithTsJest = {
  ...presentConfig,
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  verbose: true,
};

export default jestConfig;
