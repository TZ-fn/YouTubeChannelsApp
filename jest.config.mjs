export default {
  testEnvironment: 'jsdom',
  transform: { '^.+\\.js': 'babel-jest' },
  testPathIgnorePatterns: ['/node_modules/', '/mocked-data/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
