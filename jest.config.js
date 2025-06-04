const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!(nextjs-google-analytics)/)'],
  moduleNameMapper: {
    '^react-markdown$': '<rootDir>/__mocks__/react-markdown.js',
  },
};

module.exports = createJestConfig(customJestConfig);
